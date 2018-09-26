// storing our vue-stash properties for use in app

export default {
    // makes sure that website is loading or not
    loading: true,

    // makes sure that our main component is active or not
    main: false,

    // to show markup
    showMarkup: false,

    // to show original
    showOriginal: false,

    // to show paste markup modal
    pasteMarkup: false,

    // to show credits
    showCredits: false,

    // to show reset message
    reset: false,

    // for undo action
    undo: false,

    // stores filename 
    filename: '',

    // stores modified svg
    svg: '',

    // stores original svg
    oSvg: '',

    // stores background color of main component
    bgValue: '#ccc',
}