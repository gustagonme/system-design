// Input Text Examples - Basado en ILibTbInputText interface
// Referencia: knowledge_base/tech_block_lib/atoms/input_text/

// Datos de ejemplo para suggestions
const suggestionData = [
    { name: 'Argentina', code: 'AR' },
    { name: 'Brasil', code: 'BR' },
    { name: 'Colombia', code: 'CO' },
    { name: 'Chile', code: 'CL' },
    { name: 'Ecuador', code: 'EC' },
    { name: 'Perú', code: 'PE' },
    { name: 'Uruguay', code: 'UY' },
    { name: 'Venezuela', code: 'VE' },
    { name: 'México', code: 'MX' },
    { name: 'España', code: 'ES' }
];

// 1. Input Text básico (como el ejemplo de la documentación)
export const inputTextBasicCustom = {
    type: 'email',
    name: 'correo',
    floatLabel: true,
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
    caption: true,
    ngModel: 'example@example.com',
    required: true,
    captionText: {
        help: 'Escriba aquí su correo',
        error: 'Falta este campo',
        success: 'Muy bien',
    },
    class: 'input-basic-custom',
    libTbChange: (e) => {
        console.log('Input Text básico - Cambio:', e);
    },
    libTbFocus: (e) => {
        console.log('Input Text básico - Focus:', e);
    }
};

// 2. Input Text multiline (textarea)
export const inputTextMultilineCustom = {
    type: 'text',
    multiline: true,
    maxLines: 4,
    submitOnEnter: false,
    name: 'descripcion',
    label: 'Descripción',
    placeholder: 'Escriba una descripción detallada...',
    icon: 'fas fa-paper-plane',
    iconPosition: 'right',
    floatLabel: false,
    caption: true,
    showIconCaption: true,
    iconCaption: {
        help: 'fas fa-question-circle',
        error: 'fas fa-exclamation-circle',
        success: 'fas fa-check-circle',
    },
    captionText: {
        help: 'Máximo 4 líneas de texto',
        error: 'Este campo es obligatorio',
        success: 'Descripción válida',
    },
    minLength: 10,
    maxLength: 500,
    required: true,
    ngModel: '',
    class: 'input-multiline-custom',
    libTbChange: (e) => {
        console.log('Input Text multiline - Cambio:', e);
    },
    libTbKeyup: (e) => {
        console.log('Input Text multiline - Keyup:', e);
    }
};

// 3. Input Text con suggestion (autocompletado)
export const inputTextSuggestionCustom = {
    type: 'text',
    name: 'pais',
    label: 'País',
    placeholder: 'Buscar país...',
    icon: 'fas fa-search',
    iconPosition: 'left',
    floatLabel: true,
    suggestion: true,
    libTbSuggestion: {
        field: 'name', // Campo que se mostrará en las sugerencias
        suggestions: suggestionData, // Datos para las sugerencias
        dataKey: 'code', // Clave única para identificar cada opción
        delay: 300, // Tiempo de espera antes de mostrar sugerencias
        minLength: 2, // Mínimo de caracteres para activar sugerencias
        scrollHeight: '200px', // Altura del panel de sugerencias
        autoHighlight: true, // Resaltar primera opción automáticamente
        forceSelection: false, // Permitir texto libre
        completeOnFocus: false, // No mostrar sugerencias al hacer focus
        emptyMessage: {
            message: 'No se encontraron países',
            icon: 'fas fa-search'
        },
        libTbCompleteMethod: (event) => {
            console.log('Buscando sugerencias para:', event.query);
            // Aquí normalmente filtrarías los datos según event.query
        },
        libTbSelect: (event) => {
            console.log('País seleccionado:', event);
        }
    },
    caption: true,
    captionText: {
        help: 'Escriba para buscar países disponibles'
    },
    ngModel: '',
    class: 'input-suggestion-custom',
    libTbChange: (e) => {
        console.log('Input Text suggestion - Cambio:', e);
    }
};

// 4. Input Text avanzado con validaciones y filtros
export const inputTextAdvancedCustom = {
    type: 'text',
    name: 'codigo',
    label: 'Código Producto',
    placeholder: 'ABC-123',
    icon: 'fas fa-barcode',
    iconSecondary: 'fas fa-lock',
    iconPosition: 'left',
    floatLabel: true,
    caption: true,
    showIconCaption: true,
    iconCaption: {
        help: 'fas fa-info-circle',
        error: 'fas fa-times-circle',
        success: 'fas fa-check-circle',
    },
    captionText: {
        help: 'Formato: ABC-123 (3 letras, guión, 3 números)',
        error: 'Formato incorrecto',
        success: 'Código válido',
    },
    keyFilter: /^[A-Za-z0-9-]*$/, // Solo letras, números y guiones
    filterValidateOnly: false, // Bloquear caracteres no válidos
    minLength: 7,
    maxLength: 7,
    required: true,
    disabledCopy: false,
    disabledPaste: false,
    autocomplete: 'off',
    ngModel: '',
    style: {
        textTransform: 'uppercase'
    },
    class: 'input-advanced-custom',
    libTbChange: (e) => {
        console.log('Input Text avanzado - Cambio:', e);
    },
    libTbKeydown: (e) => {
        console.log('Input Text avanzado - Keydown:', e);
    },
    libTbBlur: (e) => {
        console.log('Input Text avanzado - Blur:', e);
        // Aquí podrías validar el formato
        const value = e.target.value;
        const isValid = /^[A-Z]{3}-[0-9]{3}$/.test(value);
        console.log('Código válido:', isValid);
    }
};
