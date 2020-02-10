import React, { Component, Fragment } from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import Header from "./header"
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ImageUploader from 'react-images-upload';
import request from 'request'

import Product from "./Product";

const makeRequest = (options) => {
  return new Promise((resolve, reject) => {
    request(options, (e, r, b) => {
      if (e || r.statusCode !== 200) {
        return reject(e || r.statusCode)
      } else {
        return resolve(b)
      }
    })
  })
}

class Admin extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.renderEditor = this.renderEditor.bind(this)
    this.onDrop = this.onDrop.bind(this)
    this.state = {
      data: undefined,
      currentData: undefined
    };
  }

  callAPI() {
    fetch(`${global.app.apiRootUrl}/getAllProducts`)
      .then(res => res.json())
      .then(res => {
        return res
      })
      .then(data => this.setState({ data: data.data }))
  }

  componentWillMount() {
    this.callAPI();
  }

  handleClick(product) {
    this.setState({ currentData: product })
  }

  async onDrop({product: {id}, sname}, existingImages, pictureFiles, pictureDataURLs) {
    // this.setState({
    //   pictures: this.state.pictures.concat(pictureFiles),
    // });
    let deletedImages = []
    const newImages = []
    const existingUrls = {}
    let count = 0
    pictureDataURLs.forEach((i, idx) => {
      if (~i.search(/base64/ig)) {
        newImages.push({
          name: pictureFiles[count].name,
          data: i
        })
        count++
      } else {
        existingUrls[idx] = i
      }
    })
    if (existingUrls.length !== existingImages.length) {
      deletedImages = existingImages.filter((i, idx) => (!existingUrls[idx] && i))
    }
    const payload = {
      id,
      sname,
      deletedImages,
      newImages,
    }
    const options = {
      url: `${global.app.apiRootUrl}/updateImages`,
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'content-type': 'application/json'
      }
    }
    await makeRequest(options)
  }

  async handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    // NOTE: you access FormData fields with `data.get(fieldName)` 
    const currentObj = this.state.currentData
    currentObj.services = JSON.parse(currentObj.services)
    const newObj = {}
    newObj.name = data.get('name')
    newObj.description = data.get('desc')
    newObj.services = []
    currentObj.services.forEach((i, idx) => {
      const obj = {
        name: data.get(`sname${idx}`),
        price: data.get(`price${idx}`),
        unit: data.get(`unit${idx}`),
        details: data.get(`details${idx}`),
        image: i.image,
        images: i.images
      }
      newObj.services.push(obj)
    })
    newObj.services = JSON.stringify(newObj.services)
    const payload = {
      id: currentObj.id,
      pdoc: newObj
    }
    const options = {
      url: `${global.app.apiRootUrl}/updateProduct`,
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'content-type': 'application/json'
      }
    }
    await makeRequest(options)
  }

  renderEditor() {
    const currentObj = JSON.parse(JSON.stringify(this.state.currentData || this.state.data[0]))
    currentObj.services = JSON.parse(currentObj.services)
    console.log(currentObj)
    if (currentObj) {
      return (
        <div className="editor">
          <form onSubmit={this.handleSubmit}>
            <table class='table'>
              <tbody>
                <tr>
                  <td>
                    <label>Name</label>
                  </td>
                  <td>
                    <input type='text' name='name' value={currentObj.name} />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>Description</label>
                  </td>
                  <td>
                    <input type='text' name='desc' value={currentObj.description} />
                  </td>
                </tr>
              </tbody>
            </table>
            <h3>Services</h3>
            {currentObj.services.map((service, idx) => {
              return (
                <div key={idx}>
                  <table class='table'>
                    <tbody>
                      <tr>
                        <td>
                          <label>Service Name</label>
                        </td>
                        <td>
                          <input type='text' name={`sname${idx}`} value={service.name} />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label>Price</label>
                        </td>
                        <td>
                          <input type='text' name={`price${idx}`} value={service.price} />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label>Unit</label>
                        </td>
                        <td>
                          <input type='text' name={`unit${idx}`} value={service.unit} />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <ImageUploader
                    buttonText='Choose images'
                    withPreview={true}
                    defaultImages={[`${global.app.apiRootUrl}/images/${service.image}`]}
                    onChange={this.onDrop.bind(this, {product: currentObj, sname: service.name}, [service.image])}
                    imgExtension={['.jpg', '.gif', '.png', '.gif']}
                    maxFileSize={1000000}
                    singleImage={true}
                  />
                  <CKEditor
                    editor={ClassicEditor}
                    data={service.details}
                    name={`details${idx}`}
                    onInit={editor => {
                      // You can store the "editor" and use when it is needed.
                      console.log('Editor is ready to use!', editor);
                    }}
                    onChange={(event, editor) => {
                      const data = editor.getData();
                      console.log({ event, editor, data });
                    }}
                    onBlur={(event, editor) => {
                      console.log('Blur.', editor);
                    }}
                    onFocus={(event, editor) => {
                      console.log('Focus.', editor);
                    }}
                  />
                </div>
              )
            })}
            <button position='center'>Save</button>
          </form>
        </div>
      );
    }
  }

  renderAllProducts() {
    console.log(this.state.data)
    const products = this.state.data.map((product, idx) => {
      return (<li className="listing" onClick={this.handleClick.bind(this, product)}>
        {product.name}
      </li>)
    }
    )
    return <ul className="listing">{products}</ul>
  }

  render() {
    if (!this.state.data) {
      return <div style={{
        "width": "100px",
        "height": "100px",
        "background-color": "red",

        "position": "absolute",
        "top": 0,
        "bottom": "0",
        "left": "0",
        "right": "0",
        "margin": "auto",
      }
      }
      >
        <img src="./images/ounq1mw5kdxy.gif" />
      </div>
    }
    return (
      <div>
        <Header />
        <div className='featured-section'>
          <Container>
            <Row>
              <Col xs={3}>{this.renderAllProducts()}</Col>
              <Col xs={9}>{this.renderEditor()}</Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Admin;
