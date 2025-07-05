# MercadoPago Clone

Una aplicación React que replica la funcionalidad y diseño de MercadoPago con las siguientes características:

## 🚀 Características

### Pantallas Implementadas

1. **Pantalla Inicial (Home)**
   - Muestra el saldo disponible con formato de moneda argentina
   - Información del usuario (Hector Federico Acosta)
   - Tres botones principales:
     - 📱 **Escanear QR**: Simula abrir la aplicación de cámara
     - 💰 **Ingresar dinero**: Permite agregar fondos a la cuenta
     - 💸 **Transferir**: Inicia el proceso de transferencia

2. **Pantalla de Ingresar Dinero**
   - Input de monto con validaciones
   - Botones de montos rápidos ($1.000, $2.000, $5.000, $10.000)
   - Validación de monto máximo ($1.000.000)
   - Al confirmar, se suma el monto al saldo principal

3. **Pantalla de Selección de Destinatario**
   - Lista de contactos recientes con avatares coloridos
   - Buscador para filtrar por nombre o banco
   - Datos de contactos realistas con diferentes bancos (Santander, BBVA, MercadoPago, etc.)
   - Cada contacto muestra iniciales, nombre completo y banco

4. **Pantalla de Ingreso de Monto**
   - Display grande del monto con símbolo de peso
   - Teclado numérico personalizado con diseño oscuro
   - Selector de motivo (Varios, Alimentos, Servicios, etc.)
   - Muestra saldo disponible
   - Botón "Continuar" que se habilita cuando el monto es válido

5. **Pantalla de Confirmación**
   - Datos del destinatario con avatar
   - Monto total a transferir
   - Tarjeta de cuenta con saldo disponible
   - Indicador "Sin comisión"
   - Botón "Transferir" para ejecutar la operación

6. **Pantalla de Comprobante**
   - Logo de MercadoPago
   - Fecha y hora de la transferencia
   - Monto transferido con motivo
   - Datos completos del remitente y destinatario
   - Número de operación generado automáticamente
   - Código de identificación único
   - Botones para compartir y descargar (simulados)

## 🎨 Diseño

### Fidelidad Visual
- **Colores**: Azul MercadoPago (#009ee3), Verde (#00a650), Amarillo (#ffe600)
- **Tipografía**: Inter font family para máxima legibilidad
- **Iconos**: Emojis para simular iconos reales de manera efectiva
- **Layouts**: Diseño responsive optimizado para móviles (414px max width)
- **Sombras y bordes**: Fieles al diseño original de MercadoPago
- **Animaciones**: Transiciones suaves entre pantallas y efectos hover

### Experiencia de Usuario
- **Navegación intuitiva**: Flechas de retroceso en cada pantalla
- **Validaciones en tiempo real**: Para montos y formularios
- **Feedback visual**: Estados hover, active y disabled en botones
- **Persistencia**: El saldo se guarda en localStorage
- **Responsive**: Adaptado para diferentes tamaños de pantalla móvil

## 🛠️ Tecnologías

- **React 18**: Framework principal con hooks modernos
- **CSS3**: Estilos personalizados con variables CSS y flexbox/grid
- **JavaScript ES6+**: Funcionalidades modernas del lenguaje
- **localStorage**: Persistencia del saldo del usuario
- **Intl API**: Formateo de moneda argentina

## 📱 Funcionalidades

### Gestión de Saldo
- Saldo inicial: $1.106.900,63 (como en las imágenes de referencia)
- Agregar dinero: Suma al saldo existente
- Transferencias: Descuenta del saldo disponible
- Persistencia: Se mantiene entre sesiones del navegador

### Validaciones
- **Montos**: Solo números y decimales válidos
- **Límites**: Máximo $1.000.000 para ingresos
- **Saldo suficiente**: Verifica fondos antes de transferir
- **Campos obligatorios**: Validación de formularios

### Simulaciones Realistas
- **Números de operación**: Generados aleatoriamente (12 dígitos)
- **Códigos de identificación**: Alfanuméricos únicos
- **Fechas**: Timestamp real de las transacciones
- **Contactos**: Lista variada con diferentes bancos y tipos de cuenta

## 🚀 Instalación y Uso

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm start

# La aplicación se abrirá en http://localhost:3000
```

## 📂 Estructura del Proyecto

```
src/
├── components/
│   ├── HomeScreen.js/css          # Pantalla principal con saldo
│   ├── AddMoneyScreen.js/css      # Ingresar dinero
│   ├── SelectRecipientScreen.js/css # Seleccionar destinatario
│   ├── EnterAmountScreen.js/css   # Ingresar monto con teclado
│   ├── ConfirmTransferScreen.js/css # Confirmar transferencia
│   └── ReceiptScreen.js/css       # Comprobante final
├── App.js/css                     # Componente principal y navegación
├── index.js/css                   # Punto de entrada y estilos globales
└── README.md                      # Este archivo
```

## ✨ Características Destacadas

- **Teclado numérico personalizado** con diseño oscuro como MercadoPago
- **Lista de contactos realista** con avatares coloridos y datos variados
- **Formateo de moneda argentina** con separadores de miles correctos
- **Animaciones fluidas** entre pantallas y estados
- **Diseño completamente responsive** para dispositivos móviles
- **Estado global consistente** entre todas las pantallas
- **Validaciones robustas** para una experiencia de usuario segura

## 🎯 Casos de Uso

1. **Ver saldo**: Pantalla principal muestra el dinero disponible
2. **Agregar fondos**: Usar montos rápidos o ingresar cantidad personalizada
3. **Transferir dinero**: Flujo completo desde selección de destinatario hasta comprobante
4. **Escanear QR**: Simulación de apertura de cámara (placeholder funcional)
5. **Historial**: El comprobante muestra todos los detalles de la transacción

---

**Desarrollado como clon educativo de MercadoPago con fines demostrativos** 🚀