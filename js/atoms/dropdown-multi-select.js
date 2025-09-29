// Dropdown Multi Select - Basado en ILibTbDropdownMultiSelect interface
// Referencia: knowledge_base/tech_block_lib/atoms/dropdown_multi_select/

// Opciones básicas para los ejemplos
const dropdownOptions = [
    {name: 'Opción 1', id: 1},
    {name: 'Opción 2', id: 2},
    {name: 'Opción 3', id: 3, disabled: true},
    {name: 'Opción 4', id: 4},
    {name: 'Opción 5', id: 5},
];

// Opciones agrupadas
const dropdownOptionsGroup = [
    {
        label: 'Grupo 1', value: 'G1',
        items: [
            { name: 'Opción 1', id: 1 },
            { name: 'Opción 2', id: 2 },
        ]
    },
    {
        label: 'Grupo 2', value: 'G2',
        items: [
            { name: 'Opción 3', id: 3 },
            { name: 'Opción 4', id: 4, disabled: true },
        ]
    },
];

// 1. Dropdown Multi Select básico (como el ejemplo de la documentación)
export const dropdownMultiSelectCustom = {
    options: dropdownOptions,
    optionLabel: 'name',
    optionDisabled: 'disabled',
    ariaFilterLabel: 'ariaFilterLabel',
    ariaLabelledBy: 'ariaLabelledBy',
    showIconCaption: true,
    iconCaption: {
        help: 'fa fa-question',
    },
    caption: true,
    label: 'Label Txt',
    chip: true,
    ellipsis: true,
    floatLabel: false,
    view: false,
    captionText: {
        help: 'Texto de ayuda',
    },
    id: 'dropdownmultiselectId',
    dataKey: 'id',
    ngModel: [{ id: 1 }],
    required: false,
    libTbClick: (event) => {
        console.log('Dropdown Multi Select básico - Event: ', event);
    }
};

// 2. Dropdown Multi Select con chips
export const dropdownMultiSelectChipsCustom = {
    options: dropdownOptions,
    optionLabel: 'name',
    optionValue: 'id',
    label: 'Seleccionar con Chips',
    chip: true,
    placeholder: 'Seleccione opciones',
    filter: true,
    filterPlaceholder: 'Buscar opciones',
    dataKey: 'id',
    ngModel: [1, 2],
    class: 'dropdown-chips-custom',
    libTbClick: (event) => {
        console.log('Dropdown Multi Select con chips - Event: ', event);
    }
};

// 3. Dropdown Multi Select agrupado
export const dropdownMultiSelectGroupCustom = {
    options: dropdownOptionsGroup,
    optionLabel: 'name',
    label: 'Opciones Agrupadas',
    group: true,
    optionGroupLabel: 'label',
    optionGroupChildren: 'items',
    placeholder: 'Seleccione del grupo',
    showToggleAll: true,
    toggleAllLabel: 'Seleccionar todas',
    dataKey: 'id',
    ngModel: [],
    class: 'dropdown-group-custom',
    libTbClick: (event) => {
        console.log('Dropdown Multi Select agrupado - Event: ', event);
    }
};

// 4. Dropdown Multi Select con filtro y límite
export const dropdownMultiSelectFilterCustom = {
    options: dropdownOptions,
    optionLabel: 'name',
    label: 'Con Filtro y Límite',
    filter: true,
    filterBy: 'name',
    filterPlaceholder: 'Filtrar opciones',
    selectionLimit: 2,
    placeholder: 'Máximo 2 selecciones',
    emptyFilterMessage: 'No se encontraron opciones',
    showHeader: true,
    scrollHeight: '200px',
    dataKey: 'id',
    ngModel: [],
    style: { width: '300px' },
    class: 'dropdown-filter-custom',
    libTbClick: (event) => {
        console.log('Dropdown Multi Select con filtro - Event: ', event);
    }
};
