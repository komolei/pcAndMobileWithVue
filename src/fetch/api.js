import axios from 'axios';
import qs from 'qs';

// import getToken  from "./sign";
import objectToFormData from 'object-to-formdata';

let reqUrl;
(function () {
    let url = window.document.location.href.toString();
    if (/localhost/g.test(url)) {
        reqUrl = "https://apptest..com/index.php/"
    }
    else {
        if (/test/g.test(url)) {
            reqUrl = "https://apptest..com/index.php/"
        } else {
            reqUrl = "https://app..com/index.php/"
        }
    }
})()

export function fetch(url, data, method = 'GET', headers = {
    'Content-Type': 'multipart/form-data',
    // 'Accept-Encoding': 'gzip'
}) {
    return new Promise((resolve, reject) => {
        let options = {
            'method': method,
            'url': url,
            // 'headers': headers && typeof headers === 'object' ? headers : {}
            'headers': headers
        }
        // options.headers['X-Requested-Page'] = 'json'
        options[method === 'GET' ? 'params' : 'data'] = data
        // options[method === 'GET' ? 'params' : 'data'] =  makeFormData(data)
        axios(options).then((response) => {
            resolve(response.data)
        }).catch((error) => {
            reject(error)
        })
    })
}

export function imageUpload(params) {
    console.log('imageUpload params is', params, '--', objectToFormData(params));
    return new Promise((resolve, rej) => {
        //    res(uploadImage(params)(dispatch))
        axios.post(`${reqUrl}/H5SaleInfo/uploadSalePic`, objectToFormData(params), {
            'Content-Type': 'multipart/form-data',
            // 'Accept-Encoding': 'gzip'
        }).then(res => {
            const data = res.data;
            console.log('this.responed is', data);
            data.Status ? resolve(data) : rej(data)
        })
        // const res = req.uploadSalePic(params)
        //   setTimeout(()=>{       res(2222)   },1000)
    })
}

export function imageUploadOfBlob(params) {
    let formData = new FormData()
    formData.append('LoginCellphone', params.LoginCellphone)
    formData.append('salePic', params.salePic,'image.png')
    return new Promise((resolve, rej) => {
        axios.post(`${reqUrl}/H5SaleInfo/uploadSalePic`, formData, {
            'Content-Type': 'multipart/form-data',
            // 'Accept-Encoding': 'gzip'
        }).then(res => {
            const data = res.data;
            console.log('this.responed is', data);
            data.Status ? resolve(data) : rej(data)
        })
        // const res = req.uploadSalePic(params)
        //   setTimeout(()=>{       res(2222)   },1000)
    })
}

export function serializeQuery(params) {
    return encodeURIComponent(params);
}


/**************************************************************************************************************/

export default {

    // store 店面
    // 站点信息
    siteUrl() {
        return `${reqUrl}`
    },
    queryStorePage(params) {
        return fetch(`${reqUrl}/store/queryStorePage`, params, 'POST', {
            'Content-Type': 'multipart/form-data'
        })
    },
    signUp(params) {
        return fetch(`${reqUrl}/user/signUp`, params, 'POST', {
            'Content-Type': 'multipart/form-data'
        })
    },
    login(params) {
        return fetch(`${reqUrl}/user/login`, params, 'POST', {
            'Content-Type': 'multipart/form-data'
        })
    },
    test(params) {
        return fetch('http://api.jirengu.com/fm/getChannels.php', params, 'GET')
    },
    // h5 after sale
    applyAfterSaleV2(params) {
        params = objectToFormData(params)
        return fetch(`${reqUrl}/H5SaleInfo/applyAfterSaleV2`, params, 'POST')
    },
    uploadSalePic(params) {
        params = objectToFormData(params)
        return fetch(`${reqUrl}/H5SaleInfo/uploadSalePic`, params, 'POST')
    },
  
}