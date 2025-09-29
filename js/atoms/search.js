// Search - Basado en ILibTbSearch interface
// Referencia: knowledge_base/tech_block_lib/atoms/search/

// Datos de ejemplo para las sugerencias
const searchSuggestions = [
    { id: 1, name: 'JavaScript', category: 'Lenguajes' },
    { id: 2, name: 'TypeScript', category: 'Lenguajes' },
    { id: 3, name: 'Python', category: 'Lenguajes' },
    { id: 4, name: 'Java', category: 'Lenguajes' },
    { id: 5, name: 'Angular', category: 'Frameworks' },
    { id: 6, name: 'React', category: 'Frameworks' },
    { id: 7, name: 'Vue.js', category: 'Frameworks' },
    { id: 8, name: 'Node.js', category: 'Runtime' },
    { id: 9, name: 'Express', category: 'Backend' },
    { id: 10, name: 'MongoDB', category: 'Bases de Datos' }
];

// Search básico con autocompletado (como el ejemplo de la documentación)
export const searchCustom = {
    name: 'search',
    id: 'search-input',
    placeholder: 'Buscar tecnologías...',
    icon: 'fas fa-search',
    iconClear: 'fas fa-times',
    iconPosition: 'left',
    size: 'base',
    cornerRounded: 'on',
    field: 'name', // Campo que se mostrará en las sugerencias
    dataKey: 'id', // Campo que se usará como identificador
    suggestions: [], // Se llenará dinámicamente
    minLength: 2, // Mínimo 2 caracteres para buscar
    delay: 300, // 300ms de delay
    scrollHeight: '200px',
    autoHighlight: true,
    completeOnFocus: false,
    forceSelection: false,
    ngModel: '',
    class: 'search-custom',
    style: {
        width: '100%',
        maxWidth: '400px'
    },
    emptyMessage: {
        message: 'No se encontraron resultados',
        icon: 'fas fa-search'
    },
    libTbClick: (e) => {
        console.log('Search - Click:', e);
    },
    libTbFocus: (e) => {
        console.log('Search - Focus:', e);
    },
    libTbBlur: (e) => {
        console.log('Search - Blur:', e);
    },
    libTbKeyUp: (e) => {
        console.log('Search - KeyUp:', e.target.value);
    },
    libTbCompleteMethod: (event) => {
        console.log('Search - Complete Method:', event.query);
        
        // Simular búsqueda de sugerencias
        const query = event.query.toLowerCase();
        const filteredSuggestions = searchSuggestions.filter(item =>
            item.name.toLowerCase().includes(query) ||
            item.category.toLowerCase().includes(query)
        );
        
        // Actualizar las sugerencias
        searchCustom.suggestions = filteredSuggestions;
        
        console.log('Sugerencias encontradas:', filteredSuggestions);
    },
    libTbSelect: (event) => {
        console.log('Search - Opción seleccionada:', event.value);
        console.log('Tecnología:', event.value.name, 'Categoría:', event.value.category);
    },
    libTbClear: () => {
        console.log('Search - Campo limpiado');
        searchCustom.suggestions = [];
    },
    libTbShow: (e) => {
        console.log('Search - Panel mostrado');
    },
    libTbHide: () => {
        console.log('Search - Panel ocultado');
    }
};
