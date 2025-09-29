// Text Area
export const textAreaCustom = {
    dataQaId: 'dataQaId',
    floatLabel: false,
    // placeholder: 'placeholder',
    // ngModel: '',
    // disabled: false,
    label: 'Descripción',
    view: false,
    required: false,
    columns: 30,
    rows: 4,
    minLenght: 0,
    maxLenght: 200,
    caption: true,
    showIconCaption: true,
    captionText: {
        help: 'Texto de ayuda',
    },
    iconCaption: {
        help: 'fal fa-circle-help',
    },
    name: 'input',
    style: { 'width': '100%' },
    class: 'input-text-area-jelpit',
    libTbClick: e => {
        console.log("Evento clic en el text area", e);
    },
    libTbChange: e => {
        console.log("Evento cambio en el text area", e);
    },
};
