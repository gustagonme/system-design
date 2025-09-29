// Dropdown - Basado en ILibTbDropdown interface
// Referencia: knowledge_base/tech_block_lib/atoms/dropdown/

// Opciones del dropdown (como el ejemplo de la documentación)
const dropdownOptions = [
    { name: 'Colombia', id: 1 },
    { name: 'Argentina', id: 2 },
    { name: 'Brasil', id: 3 },
    { name: 'Chile', id: 4 },
    { name: 'Ecuador', id: 5, disabled: true },
    { name: 'Perú', id: 6 },
    { name: 'Uruguay', id: 7 },
    { name: 'Venezuela', id: 8 }
];

// Dropdown básico (como el ejemplo de la documentación)
export const dropdownCustom = {
    id: 'dropdown-paises',
    name: 'pais',
    placeholder: 'Seleccione un país',
    options: dropdownOptions,
    optionLabel: 'name', // Campo que se mostrará
    optionValue: 'id', // Campo que se usará como valor
    optionDisabled: 'disabled', // Campo para opciones deshabilitadas
    dataKey: 'id', // Campo identificador único
    showClear: true, // Mostrar botón de limpiar
    filter: true, // Habilitar filtrado
    filterPlaceholder: 'Buscar país...',
    filterBy: 'name', // Campo por el cual filtrar
    resetFilterOnHide: true, // Limpiar filtro al cerrar
    dropdownIcon: 'fas fa-chevron-down',
    dropdownIconUp: 'fas fa-chevron-up',
    scrollHeight: '200px',
    ngModel: null, // Valor seleccionado inicialmente
    required: true,
    error: false,
    success: false,
    view: false,
    disabled: false,
    floatLabel: true,
    label: 'País de Residencia',
    caption: true,
    showHelp: true,
    showIconCaption: true,
    captionText: {
        help: 'Selecciona tu país de residencia actual',
        error: 'Debes seleccionar un país',
        success: 'País seleccionado correctamente'
    },
    iconCaption: {
        help: 'fas fa-info-circle',
        error: 'fas fa-exclamation-circle',
        success: 'fas fa-check-circle'
    },
    style: {
        width: '100%',
        maxWidth: '300px'
    },
    class: 'dropdown-custom',
    panelClass: 'dropdown-panel-custom',
    emptyMessage: {
        message: 'No se encontraron países',
        icon: 'fas fa-search'
    },
    libTbClick: (e) => {
        console.log('Dropdown - Click:', e);
    },
    libTbChange: (e) => {
        console.log('Dropdown - Cambio:', e.value);
        if (e.value) {
            const selectedCountry = dropdownOptions.find(country => country.id === e.value);
            console.log('País seleccionado:', selectedCountry?.name);
            
            // Actualizar estado visual según selección
            dropdownCustom.success = true;
            dropdownCustom.error = false;
        } else {
            dropdownCustom.success = false;
            dropdownCustom.error = false;
        }
    },
    libTbFilter: (e) => {
        console.log('Dropdown - Filtro:', e.filter);
    },
    libTbFocus: (e) => {
        console.log('Dropdown - Focus:', e);
    },
    libTbBlur: (e) => {
        console.log('Dropdown - Blur:', e);
        // Validar si es requerido y no tiene valor
        if (dropdownCustom.required && !dropdownCustom.ngModel) {
            dropdownCustom.error = true;
            dropdownCustom.success = false;
        }
    },
    libTbShow: (e) => {
        console.log('Dropdown - Panel mostrado');
    },
    libTbHide: (e) => {
        console.log('Dropdown - Panel ocultado');
    }
};
