const SET_FILE_LIST = (state, list) => {
    // console.log({
    //     list: list
    // });
    // console.log({
    //     state: state
    // });

    state.list = list
}
const SET_MUSIC_LIST = (state, Music) => {
    // console.log({
    //     Music: Music
    // });
    // console.log({
    //     state: state
    // });

    state.Music = Music
}
const SET_IMAGE_LIST = (state, Image) => {
    // console.log({
    //     Image: Image
    // });
    // console.log({
    //     state: state
    // });

    state.Image = Image
}

const SET_DOC_LIST = (state, Doc) => {
    // console.log({
    //     Doc: Doc
    // });
    // console.log({
    //     state: state
    // });

    state.Doc = Doc
}
const SET_COMPRESS_LIST = (state, Compress) => {
    // console.log({
    //     Compress: Compress
    // });
    // console.log({
    //     state: state
    // });

    state.Compress = Compress
}
const SET_VIDEO_LIST = (state, Video) => {
    // console.log({
    //     Video: Video
    // });
    // console.log({
    //     state: state
    // });

    state.Video = Video
}
const SET_UNKNOW_LIST = (state, Unknow) => {
    // console.log({
    //     Unknow: Unknow
    // });
    // console.log({
    //     state: state
    // });

    state.Unknow = Unknow
}
const SET_PROGRAM_LIST = (state, Program) => {
    // console.log({
    //     Program: Program
    // });
    // console.log({
    //     state: state
    // });
    state.Program = Program
}

const SET_ERROR = (state, eError) => {
    // console.log({
    //     eError: eError
    // });
    // console.log({
    //     state: state
    // });
    state.eError = eError
}
export default {
    SET_FILE_LIST,
    SET_DOC_LIST,
    SET_COMPRESS_LIST,
    SET_IMAGE_LIST,
    SET_VIDEO_LIST,
    SET_UNKNOW_LIST,
    SET_PROGRAM_LIST,
    SET_MUSIC_LIST,
    SET_ERROR

}