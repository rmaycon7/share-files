import axios from 'axios'

const get_file_list = async ({
    commit
}) => {
    axios.get('http://localhost:9090/files').then(response => {
        console.log(response.data);
        // console.log
        // commit('SET_FILE_LIST', response.data.data)
        commit('SET_MUSIC_LIST', response.data.data.filter(file => {
            return file.type.toString() === 'Music'
        }))
        commit('SET_VIDEO_LIST', response.data.data.filter(file => {
            return file.type.toString() === 'Video'
        }))
        commit('SET_IMAGE_LIST', response.data.data.filter(file => {
            return file.type.toString() === 'Image'
        }))
        commit('SET_DOC_LIST', response.data.data.filter(file => {
            return file.type.toString() === 'Doc'
        }))
        commit('SET_PROGRAM_LIST', response.data.data.filter(file => {
            return file.type.toString() === 'Program'
        }))
        commit('SET_COMPRESS_LIST', response.data.data.filter(file => {
            return file.type.toString() === 'Compress'
        }))
        commit('SET_UNKNOW_LIST', response.data.data.filter(file => {
            return file.type.toString() === 'Unknow'
        }))
        commit('SET_ERROR', null)
        commit('changeVersion', null, {
            root: true
        })

    }).catch(error => {
        if (error) {
            commit('SET_ERROR', error.response.data)
            // console.log({
            //     error_response: error.response.data
            // });
        }

    })
}

const get_by_type = async ({
    commit
}, type) => {
    axios.get(`http://localhost:9090/files/${type}`).then(response => {
        console.log(response.data);
        const types = {
            Music: 'SET_MUSIC_LIST',
            Video: 'SET_VIDEO_LIST',
            Image: 'SET_IMAGE_LIST',
            Doc: 'SET_DOC_LIST',
            Program: 'SET_PROGRAM_LIST',
            Compress: 'SET_COMPRESS_LIST',
            Unknow: 'SET_UNKNOW_LIST'
        }
        commit(types[type], response.data.data)
        commit('changeVersion', null, {
            root: true
        })
        // commit('changeVersion', null)
        commit('SET_ERROR', null)

    }).catch(error => {
        if (error) {
            commit('SET_ERROR', error.response.data)
            // console.log({
            //     error_response: error.response.data
            // });
        }

    })
}

export default {
    get_file_list,
    get_by_type
}