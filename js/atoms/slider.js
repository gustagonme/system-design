// Slider - Basado en ILibTbSlider interface
// Referencia: knowledge_base/tech_block_lib/atoms/slider/

// 1. Slider horizontal normal (valor único)
export const sliderHorizontalCustom = {
    label: 'Volumen',
    orientation: 'horizontal',
    value: 50,
    min: 0,
    max: 100,
    step: 1,
    range: false, // Slider simple, no rango
    animate: true,
    floatValues: true,
    class: 'slider-horizontal-custom',
    style: {
        width: '300px',
        marginBottom: '20px'
    },
    libTbChange: (e) => {
        console.log('Slider horizontal - Cambio:', e.value, e);
    },
    libTbSlideEnd: (e) => {
        console.log('Slider horizontal - Fin del deslizamiento:', e.value, e);
    }
};

// 2. Slider horizontal de rango (dos valores)
export const sliderRangeCustom = {
    label: 'Rango de Precios',
    orientation: 'horizontal',
    value: [20, 80], // Array con dos valores para el rango
    min: 0,
    max: 100,
    step: 5,
    range: true, // Habilita la selección de rango
    animate: true,
    floatValues: true,
    class: 'slider-range-custom',
    style: {
        width: '300px',
        marginBottom: '20px'
    },
    libTbChange: (e) => {
        console.log('Slider rango - Cambio:', e.value, e);
    },
    libTbSlideEnd: (e) => {
        console.log('Slider rango - Fin del deslizamiento:', e.value, e);
    }
};
