// Variable compartida para el grupo de radio buttons de género
let selectedGender = null; // Inicialmente ninguno seleccionado

// Radio Button 1 - Hombre
export const radio1Custom = {
    name: 'gender',
    class: 'mx-4',
    label: 'Hombre',
    value: 'H',
    ngModel: selectedGender, // Modelo compartido
    libTbChange: (e) => {
        selectedGender = e.value;
        // Actualizar el modelo del otro radio button
        radio2Custom.ngModel = selectedGender;
        console.log('Género seleccionado:', e.value, e);
    },
};

// Radio Button 2 - Mujer
export const radio2Custom = {
    name: 'gender',
    class: 'mx-4',
    label: 'Mujer',
    value: 'M',
    ngModel: selectedGender, // Modelo compartido
    libTbChange: (e) => {
        selectedGender = e.value;
        // Actualizar el modelo del otro radio button
        radio1Custom.ngModel = selectedGender;
        console.log('Género seleccionado:', e.value, e);
    },
};
