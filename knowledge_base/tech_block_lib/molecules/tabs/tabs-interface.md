```typescript
import { ILibTbMenuItem } from '../../shared/interfaces/menu-item';
export interface ILibTbTabs {
  dataQaId?: string; // Establece el atributo data-qa-id para el componente
  items?: ILibTbMenuItem[]; // Establece las propiedades de los tabs que deben existir
  activeItem?: number; // Establece el index del tab que debe estar activo
  style?: Record<string, string | number>; // Establece los estilos que se desean aplicar formato: { propiedad: valor } ({ color: 'red' })
  class?: string; // Establece las clases que se desean agregar al componente, deben estar separadas por un espacio
  typeTabs?: 'track' | 'button' | 'folder'; // Establece el tipo de estlo para los tabs que see desea mostrar
  fullTabs?: boolean; // Establece si los tabs deben ocupar el 100% del contenedor padre
  centerTabs?: boolean; // Establece si los tabs deben estar centrados
  layout?: 'vertical' | 'horizontal'; // Establece el layout horizontal o vertical
  showDescription?: boolean; // Establece si muestra o no la descripcion
  maxCharacters?: number; // Establece el máximo de caracteres que se van a mostrar
  showIcon?: boolean; // Establece si muestra o no el icono
  autoMove?: boolean; // Establece que se va a mover automaticamente el tabs al cambiar entre tabs, por defecto se encuentra activo.
  libTbActiveItemChange?: (index: number) => void; // Ejecuta una función cuando el tab cambia de item activo.
}
```
