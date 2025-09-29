// Input Number - Basado en ILibTbInputNumber interface
// Referencia: knowledge_base/tech_block_lib/atoms/input_number/

// Input Number con botones (como el ejemplo de la documentación)
export const inputNumberCustom = {
    dataQaId: 'input-number-cantidad',
    id: 'input-number-cantidad',
    name: 'cantidad',
    label: 'Cantidad de Productos',
    placeholder: 'Ingrese la cantidad',
    ngModel: 5, // Valor inicial
    
    // Configuración de botones - PRINCIPAL FUNCIONALIDAD
    showButtons: true, // Mostrar botones de incremento/decremento
    incrementButtonIcon: 'fas fa-plus', // Icono del botón de incremento
    decrementButtonIcon: 'fas fa-minus', // Icono del botón de decremento
    
    // Configuración de rango y paso
    min: 1, // Valor mínimo
    max: 100, // Valor máximo
    step: 1, // Incremento/decremento por paso
    
    // Configuración de formato
    format: true, // Habilitar formato
    useGrouping: true, // Usar separadores de miles
    locale: 'es-ES', // Configuración regional española
    localeMatcher: 'best fit', // Algoritmo de coincidencia
    
    // Configuración de decimales (para cantidades no necesarios)
    minFractionDigits: 0,
    maxFractionDigits: 0,
    
    // Propiedades del input
    size: 10, // Tamaño del input
    maxlength: 3, // Máximo 3 caracteres (hasta 100)
    autocomplete: 'off',
    required: true,
    disabled: false,
    view: false,
    error: false,
    success: false,
    
    // Configuración de label y caption
    floatLabel: true, // Label flotante
    caption: true, // Mostrar caption
    showHelp: true, // Mostrar ayuda
    showIconCaption: true, // Mostrar iconos en caption
    captionText: {
        help: 'Selecciona la cantidad de productos (1-100)',
        error: 'La cantidad debe estar entre 1 y 100',
        success: 'Cantidad válida seleccionada'
    },
    iconCaption: {
        help: 'fas fa-info-circle',
        error: 'fas fa-exclamation-circle',
        success: 'fas fa-check-circle'
    },
    
    // Estilos
    style: {
        width: '100%',
        maxWidth: '200px'
    },
    class: 'input-number-custom',
    
    // Configuración de botones personalizados (ILibTbButton)
    libTbButtomMinus: {
        // Botón de decremento personalizado
        styleBtn: 'fill',
        typeBtn: 'secondary',
        icon: 'fas fa-minus',
        size: 'small',
        disabled: false,
        class: 'input-number-minus-button',
        libTbClick: (e) => {
            console.log('Botón menos clickeado', e);
            // El componente maneja automáticamente el decremento
            // Aquí se puede agregar lógica adicional si es necesario
        }
    },
    
    libTbButtomPlus: {
        // Botón de incremento personalizado
        styleBtn: 'fill',
        typeBtn: 'primary',
        icon: 'fas fa-plus',
        size: 'small',
        disabled: false,
        class: 'input-number-plus-button',
        libTbClick: (e) => {
            console.log('Botón más clickeado', e);
            // El componente maneja automáticamente el incremento
            // Aquí se puede agregar lógica adicional si es necesario
        }
    },
    
    // Eventos del input
    libTbFocus: (e) => {
        console.log('Input Number - Focus:', e);
        console.log('Campo de cantidad recibió el foco');
    },
    
    libTbBlur: (e) => {
        console.log('Input Number - Blur:', e);
        console.log('Campo de cantidad perdió el foco');
        
        // Validación en blur
        const value = e.value;
        if (value !== null && value !== undefined) {
            if (value < inputNumberCustom.min || value > inputNumberCustom.max) {
                inputNumberCustom.error = true;
                inputNumberCustom.success = false;
                console.log(`Valor fuera de rango: ${value} (debe estar entre ${inputNumberCustom.min} y ${inputNumberCustom.max})`);
            } else {
                inputNumberCustom.error = false;
                inputNumberCustom.success = true;
                console.log(`Valor válido: ${value}`);
            }
        } else if (inputNumberCustom.required) {
            inputNumberCustom.error = true;
            inputNumberCustom.success = false;
            console.log('Campo requerido sin valor');
        }
    },
    
    libTbChange: (e) => {
        console.log('Input Number - Cambio:', e.value);
        console.log(`Nueva cantidad: ${e.value}`);
        
        // Actualizar el modelo
        inputNumberCustom.ngModel = e.value;
        
        // Validación en tiempo real
        if (e.value !== null && e.value !== undefined) {
            if (e.value >= inputNumberCustom.min && e.value <= inputNumberCustom.max) {
                inputNumberCustom.error = false;
                inputNumberCustom.success = true;
                console.log(`✅ Cantidad válida: ${e.value} productos`);
                
                // Lógica de negocio adicional
                if (e.value >= 50) {
                    console.log('🎉 ¡Cantidad alta! Posible descuento por volumen');
                } else if (e.value >= 10) {
                    console.log('📦 Cantidad media - envío estándar');
                } else {
                    console.log('📝 Cantidad pequeña - envío express disponible');
                }
            } else {
                inputNumberCustom.error = true;
                inputNumberCustom.success = false;
                console.log(`❌ Cantidad inválida: ${e.value} (rango: ${inputNumberCustom.min}-${inputNumberCustom.max})`);
            }
        }
    },
    
    libTbKeydown: (e) => {
        console.log('Input Number - Keydown:', e);
        
        // Permitir solo números y teclas de control
        const allowedKeys = ['Backspace', 'Delete', 'Tab', 'Escape', 'Enter', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'];
        const isNumber = /^[0-9]$/.test(e.key);
        
        if (!isNumber && !allowedKeys.includes(e.key)) {
            console.log(`Tecla no permitida: ${e.key}`);
            // En un entorno real, aquí se haría e.preventDefault()
        } else {
            console.log(`Tecla permitida: ${e.key}`);
        }
    }
};
