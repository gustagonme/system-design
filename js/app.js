import { inputCustom } from './atoms/input-text.js';
import { passwordMeterCustom } from './molecules/password-meter.js';
import { calendarCustom } from './molecules/calendar.js';
import { radio1Custom, radio2Custom } from './atoms/radio-button.js';
import { textAreaCustom } from './atoms/text-area.js';
import { buttonCustom } from './atoms/button.js';
import { 
    badgeCustom, 
    badgeSuccessCustom, 
    badgeInfoCustom, 
    badgeWarningCustom 
} from './atoms/badge.js';
import { 
    alertFixedInfoCustom,
    alertFixedSuccessCustom,
    alertFixedWarningCustom,
    alertFixedErrorCustom,
    alertFloatCustom
} from './atoms/alert.js';
import { 
    avatarCustom,
    avatarLabelCustom,
    avatarIconCustom,
    avatarImageCustom,
    avatarWithButtonCustom
} from './atoms/avatar.js';
import { 
    breadcrumbCustom,
    breadcrumbIconCustom,
    breadcrumbSimpleCustom,
    breadcrumbNavigationCustom
} from './atoms/breadcrumb.js';
import { 
    buttonPrimaryCustom,
    buttonSecondaryCustom,
    buttonTertiaryCustom,
    buttonErrorCustom,
    buttonTextCustom,
    buttonLoadingCustom,
    buttonLoadingStaticCustom,
    buttonDisabledCustom,
    buttonIconOnlyCustom,
    buttonAdvancedCustom
} from './atoms/button-examples.js';
import { 
    checkboxCustom,
    checkboxBinaryCustom,
    checkboxIconCustom,
    checkboxDisabledCustom,
    checkboxErrorCustom,
    checkboxViewCustom,
    checkboxAdvancedCustom,
    checkboxMultiple1Custom,
    checkboxMultiple2Custom,
    checkboxMultiple3Custom
} from './atoms/checkbox.js';
import { 
    chipCustom,
    chipImageCustom,
    chipIconCustom,
    chipRemovableCustom,
    chipActiveCustom,
    chipDisabledCustom,
    chipAdvancedCustom,
    chipSimpleCustom
} from './atoms/chip.js';
import { 
    dropdownMultiSelectCustom,
    dropdownMultiSelectChipsCustom,
    dropdownMultiSelectGroupCustom,
    dropdownMultiSelectFilterCustom
} from './atoms/dropdown-multi-select.js';
import { 
    inputTextBasicCustom,
    inputTextMultilineCustom,
    inputTextSuggestionCustom,
    inputTextAdvancedCustom
} from './atoms/input-text-examples.js';
import { progressBarCustom } from './atoms/progress-bar.js';
import { 
    progressSpinnerBasicCustom,
    progressSpinnerIntegratedCustom,
    progressSpinnerInfiniteCustom
} from './atoms/progress-spinner.js';
import { 
    skeletonCircularCustom,
    skeletonRoundedCustom
} from './atoms/skeleton.js';
import { 
    sliderHorizontalCustom,
    sliderRangeCustom
} from './atoms/slider.js';
import { 
    snackbarCustom,
    snackbarTriggerButtonCustom
} from './atoms/snackbar.js';
import { switchCustom } from './atoms/switch.js';
import { 
    tagInfoCustom,
    tagWarningCustom,
    tagErrorCustom,
    tagSuccessCustom
} from './atoms/tag.js';
import { searchCustom } from './atoms/search.js';
import { dropdownCustom } from './atoms/dropdown.js';
import { indicatorGalleryCustom } from './atoms/indicator-gallery.js';
import { inputNumberCustom } from './atoms/input-number.js';
import { stepperProgressBarCustom } from './atoms/stepper-progress-bar.js';
import { paginatorCustom } from './molecules/paginator.js';
import { cardCustom } from './molecules/card.js';
import { answerStateCustom } from './molecules/answer-state.js';
import { fileUploadFieldCustom } from './organisms/file-upload-field.js';

window.onload = function () {

    // Input Text
    const inputElement = document.getElementById("input-1");
    inputElement.custom = inputCustom;

    // Password Meter
    const passwordMeterElement = document.getElementById("password-meter-1");
    passwordMeterElement.custom = passwordMeterCustom;

    // Calendar
    const calendar1Element = document.getElementById("calendar-1");
    calendar1Element.custom = calendarCustom;

    // Radio Buttons
    const radio1Element = document.getElementById("radio-1");
    radio1Element.custom = radio1Custom;

    const radio2Element = document.getElementById("radio-2");
    radio2Element.custom = radio2Custom;

    // Text Area
    const textArea1Element = document.getElementById("text-area-1");
    textArea1Element.custom = textAreaCustom;

    // Button
    const btn1Element = document.getElementById("btn-1");
    btn1Element.custom = buttonCustom;

    // Badges
    const badge1Element = document.getElementById("badge-1");
    badge1Element.custom = badgeCustom;

    const badge2Element = document.getElementById("badge-2");
    badge2Element.custom = badgeSuccessCustom;

    const badge3Element = document.getElementById("badge-3");
    badge3Element.custom = badgeInfoCustom;

    const badge4Element = document.getElementById("badge-4");
    badge4Element.custom = badgeWarningCustom;

    // Fixed Alerts
    const alertFixedInfoElement = document.getElementById("alert-fixed-info");
    alertFixedInfoElement.custom = alertFixedInfoCustom;

    const alertFixedSuccessElement = document.getElementById("alert-fixed-success");
    alertFixedSuccessElement.custom = alertFixedSuccessCustom;

    const alertFixedWarningElement = document.getElementById("alert-fixed-warning");
    alertFixedWarningElement.custom = alertFixedWarningCustom;

    const alertFixedErrorElement = document.getElementById("alert-fixed-error");
    alertFixedErrorElement.custom = alertFixedErrorCustom;

    // Float Alert
    const alertFloatElement = document.getElementById("alert-float");
    alertFloatElement.custom = alertFloatCustom;

    // Avatars
    const avatar1Element = document.getElementById("avatar-1");
    avatar1Element.custom = avatarCustom;

    const avatar2Element = document.getElementById("avatar-2");
    avatar2Element.custom = avatarLabelCustom;

    const avatar3Element = document.getElementById("avatar-3");
    avatar3Element.custom = avatarIconCustom;

    const avatar4Element = document.getElementById("avatar-4");
    avatar4Element.custom = avatarImageCustom;

    const avatar5Element = document.getElementById("avatar-5");
    avatar5Element.custom = avatarWithButtonCustom;

    // Breadcrumbs
    const breadcrumb1Element = document.getElementById("breadcrumb-1");
    breadcrumb1Element.custom = breadcrumbCustom;

    const breadcrumb2Element = document.getElementById("breadcrumb-2");
    breadcrumb2Element.custom = breadcrumbIconCustom;

    const breadcrumb3Element = document.getElementById("breadcrumb-3");
    breadcrumb3Element.custom = breadcrumbSimpleCustom;

    const breadcrumb4Element = document.getElementById("breadcrumb-4");
    breadcrumb4Element.custom = breadcrumbNavigationCustom;

    // Button Examples
    const buttonPrimaryElement = document.getElementById("button-primary");
    buttonPrimaryElement.custom = buttonPrimaryCustom;

    const buttonSecondaryElement = document.getElementById("button-secondary");
    buttonSecondaryElement.custom = buttonSecondaryCustom;

    const buttonTertiaryElement = document.getElementById("button-tertiary");
    buttonTertiaryElement.custom = buttonTertiaryCustom;

    const buttonErrorElement = document.getElementById("button-error");
    buttonErrorElement.custom = buttonErrorCustom;

    const buttonTextElement = document.getElementById("button-text");
    buttonTextElement.custom = buttonTextCustom;

    const buttonLoadingElement = document.getElementById("button-loading");
    buttonLoadingElement.custom = buttonLoadingCustom;

    const buttonLoadingStaticElement = document.getElementById("button-loading-static");
    buttonLoadingStaticElement.custom = buttonLoadingStaticCustom;

    const buttonDisabledElement = document.getElementById("button-disabled");
    buttonDisabledElement.custom = buttonDisabledCustom;

    const buttonIconOnlyElement = document.getElementById("button-icon-only");
    buttonIconOnlyElement.custom = buttonIconOnlyCustom;

    const buttonAdvancedElement = document.getElementById("button-advanced");
    buttonAdvancedElement.custom = buttonAdvancedCustom;

    // Checkboxes
    const checkboxBasicElement = document.getElementById("checkbox-basic");
    checkboxBasicElement.custom = checkboxCustom;

    const checkboxBinaryElement = document.getElementById("checkbox-binary");
    checkboxBinaryElement.custom = checkboxBinaryCustom;

    const checkboxIconElement = document.getElementById("checkbox-icon");
    checkboxIconElement.custom = checkboxIconCustom;

    const checkboxDisabledElement = document.getElementById("checkbox-disabled");
    checkboxDisabledElement.custom = checkboxDisabledCustom;

    const checkboxErrorElement = document.getElementById("checkbox-error");
    checkboxErrorElement.custom = checkboxErrorCustom;

    const checkboxViewElement = document.getElementById("checkbox-view");
    checkboxViewElement.custom = checkboxViewCustom;

    const checkboxAdvancedElement = document.getElementById("checkbox-advanced");
    checkboxAdvancedElement.custom = checkboxAdvancedCustom;

    const checkboxMultiple1Element = document.getElementById("checkbox-multiple-1");
    checkboxMultiple1Element.custom = checkboxMultiple1Custom;

    const checkboxMultiple2Element = document.getElementById("checkbox-multiple-2");
    checkboxMultiple2Element.custom = checkboxMultiple2Custom;

    const checkboxMultiple3Element = document.getElementById("checkbox-multiple-3");
    checkboxMultiple3Element.custom = checkboxMultiple3Custom;

    // Chips
    const chipBasicElement = document.getElementById("chip-basic");
    chipBasicElement.custom = chipCustom;

    const chipImageElement = document.getElementById("chip-image");
    chipImageElement.custom = chipImageCustom;

    const chipIconElement = document.getElementById("chip-icon");
    chipIconElement.custom = chipIconCustom;

    const chipRemovableElement = document.getElementById("chip-removable");
    chipRemovableElement.custom = chipRemovableCustom;

    const chipActiveElement = document.getElementById("chip-active");
    chipActiveElement.custom = chipActiveCustom;

    const chipDisabledElement = document.getElementById("chip-disabled");
    chipDisabledElement.custom = chipDisabledCustom;

    const chipAdvancedElement = document.getElementById("chip-advanced");
    chipAdvancedElement.custom = chipAdvancedCustom;

    const chipSimpleElement = document.getElementById("chip-simple");
    chipSimpleElement.custom = chipSimpleCustom;

    // Dropdown Multi Select
    const dropdownMultiBasicElement = document.getElementById("dropdown-multi-basic");
    dropdownMultiBasicElement.custom = dropdownMultiSelectCustom;

    const dropdownMultiChipsElement = document.getElementById("dropdown-multi-chips");
    dropdownMultiChipsElement.custom = dropdownMultiSelectChipsCustom;

    const dropdownMultiGroupElement = document.getElementById("dropdown-multi-group");
    dropdownMultiGroupElement.custom = dropdownMultiSelectGroupCustom;

    const dropdownMultiFilterElement = document.getElementById("dropdown-multi-filter");
    dropdownMultiFilterElement.custom = dropdownMultiSelectFilterCustom;

    // Input Text Examples
    const inputTextBasicElement = document.getElementById("input-text-basic");
    inputTextBasicElement.custom = inputTextBasicCustom;

    const inputTextMultilineElement = document.getElementById("input-text-multiline");
    inputTextMultilineElement.custom = inputTextMultilineCustom;

    const inputTextSuggestionElement = document.getElementById("input-text-suggestion");
    inputTextSuggestionElement.custom = inputTextSuggestionCustom;

    const inputTextAdvancedElement = document.getElementById("input-text-advanced");
    inputTextAdvancedElement.custom = inputTextAdvancedCustom;

    // Progress Bar
    const progressBar1Element = document.getElementById("progress-bar-1");
    progressBar1Element.custom = progressBarCustom;

    // Progress Spinner
    const progressSpinnerBasicElement = document.getElementById("progress-spinner-basic");
    progressSpinnerBasicElement.custom = progressSpinnerBasicCustom;

    const progressSpinnerIntegratedElement = document.getElementById("progress-spinner-integrated");
    progressSpinnerIntegratedElement.custom = progressSpinnerIntegratedCustom;

    const progressSpinnerInfiniteElement = document.getElementById("progress-spinner-infinite");
    progressSpinnerInfiniteElement.custom = progressSpinnerInfiniteCustom;

    // Skeleton
    const skeletonCircularElement = document.getElementById("skeleton-circular");
    skeletonCircularElement.custom = skeletonCircularCustom;

    const skeletonRoundedElement = document.getElementById("skeleton-rounded");
    skeletonRoundedElement.custom = skeletonRoundedCustom;

    // Slider
    const sliderHorizontalElement = document.getElementById("slider-horizontal");
    sliderHorizontalElement.custom = sliderHorizontalCustom;

    const sliderRangeElement = document.getElementById("slider-range");
    sliderRangeElement.custom = sliderRangeCustom;

    // Snackbar
    const snackbarElement = document.getElementById("snackbar-1");
    snackbarElement.custom = snackbarCustom;

    // Snackbar Trigger Button
    const snackbarTriggerButtonElement = document.getElementById("snackbar-trigger-button");
    snackbarTriggerButtonElement.custom = snackbarTriggerButtonCustom;

    // Switch
    const switch1Element = document.getElementById("switch-1");
    switch1Element.custom = switchCustom;

    // Tags
    const tagInfoElement = document.getElementById("tag-info");
    tagInfoElement.custom = tagInfoCustom;

    const tagWarningElement = document.getElementById("tag-warning");
    tagWarningElement.custom = tagWarningCustom;

    const tagErrorElement = document.getElementById("tag-error");
    tagErrorElement.custom = tagErrorCustom;

    const tagSuccessElement = document.getElementById("tag-success");
    tagSuccessElement.custom = tagSuccessCustom;

    // Search
    const search1Element = document.getElementById("search-1");
    search1Element.custom = searchCustom;

    // Dropdown
    const dropdown1Element = document.getElementById("dropdown-1");
    dropdown1Element.custom = dropdownCustom;

    // Indicator Gallery
    const indicatorGallery1Element = document.getElementById("indicator-gallery-1");
    indicatorGallery1Element.custom = indicatorGalleryCustom;

    // Input Number
    const inputNumber1Element = document.getElementById("input-number-1");
    inputNumber1Element.custom = inputNumberCustom;

    // Stepper Progress Bar
    const stepperProgressBar1Element = document.getElementById("stepper-progress-bar-1");
    stepperProgressBar1Element.custom = stepperProgressBarCustom;

    // Paginator
    const paginator1Element = document.getElementById("paginator-1");
    paginator1Element.custom = paginatorCustom;

    // Card
    const card1Element = document.getElementById("card-1");
    card1Element.custom = cardCustom;

    // Answer State
    const answerState1Element = document.getElementById("answer-state-1");
    answerState1Element.custom = answerStateCustom;

    // File Upload Field
    const fileUploadField1Element = document.getElementById("file-upload-field-1");
    fileUploadField1Element.custom = fileUploadFieldCustom;

    // Función global para mostrar alert flotante
    window.showFloatAlert = function() {
        // Simulamos el servicio de alert para mostrar un mensaje flotante
        console.log('Mostrando alert flotante - En un entorno real usarías LibTbAlertService');
        // Aquí normalmente usarías: alertService.add({ key: 'alert-float', type: 'info', title: 'Alert Flotante', description: 'Este es un mensaje flotante' });
    };

    // Ejemplo de cambio dinámico del botón después de 3 segundos
    setTimeout(() => {
        btn1Element.custom.label = 'Cancelar';
        btn1Element.custom.icon = 'fal fa-home';
        btn1Element.custom.typeBtn = 'primary';
    }, 3000);

    // Ejemplo de cambio dinámico de avatar después de 4 segundos
    setTimeout(() => {
        avatar2Element.custom.label = 'XX';
        avatar2Element.custom.style = {
            ...avatar2Element.custom.style,
            background: '#dc3545',
            color: 'white'
        };
        avatar3Element.custom.icon = 'fas fa-star';
        avatar3Element.custom.style = {
            ...avatar3Element.custom.style,
            color: '#ffc107'
        };
    }, 4000);

};