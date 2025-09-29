// Input Text
export const inputCustom = {
    type: 'email',
    name: 'correo',
    // floatLabel: true,
    placeholder: 'Correo',
    icon: 'fal fa-user',
    iconPosition: 'right',
    label: 'Correo',
    showIconCaption: true,
    iconCaption: {
        help: 'fas fa-info-circle',
        error: 'fas fa-times-circle',
        success: 'fas fa-check-circle',
    },
    caption: false,
    ngModel: 'example@example.com',
    required: true,
    // autocomplete: true,
    captionText: {
        help: 'Escriba aquí su correo',
        error: 'Falta este campo',
        success: 'Muy bien',
    },
    // view: true,
    /* libTbClick: (e) => {
      console.log('Evento clic en el input', e)
    }, */
    libTbChange: (e) => {
        console.log('Evento cambio en el input', e)
    },
    /* libTbKeydown: (e) => {
      console.log('Evento keydown en el input', e)
    },
    libTbFocus: (e) => {
      console.log('Evento focus en el input', e)
    },
    libTbBlur: (e) => {
      console.log('Evento blur en el input', e)
    },
    libTbKeypress: (e) => {
      console.log('Evento keypress en el input', e)
    },
    libTbKeyup: (e) => {
      console.log('Evento keyup en el input', e)
    }, */
}