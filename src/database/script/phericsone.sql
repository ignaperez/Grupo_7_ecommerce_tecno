-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 15-12-2022 a las 23:54:55
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `phericsone`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias_productos`
--

CREATE TABLE `categorias_productos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `categorias_productos`
--

INSERT INTO `categorias_productos` (`id`, `nombre`) VALUES
(1, 'Auriculares'),
(2, 'Teclados'),
(3, 'Mouse'),
(4, 'Joystick'),
(5, 'Monitores'),
(6, 'Mousepads');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias_usuarios`
--

CREATE TABLE `categorias_usuarios` (
  `id` int(2) NOT NULL,
  `nombre` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `categorias_usuarios`
--

INSERT INTO `categorias_usuarios` (`id`, `nombre`) VALUES
(1, 'Administrador'),
(2, 'Usuario');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(11) NOT NULL,
  `titulo` varchar(255) NOT NULL,
  `categoria_id` int(10) NOT NULL,
  `precio` decimal(8,0) NOT NULL,
  `garantia` int(2) NOT NULL,
  `descripcion1` text NOT NULL,
  `descripcion2` text DEFAULT NULL,
  `descripcion3` text DEFAULT NULL,
  `imagen1` varchar(255) DEFAULT NULL,
  `imagen2` varchar(255) DEFAULT NULL,
  `imagen3` varchar(255) DEFAULT NULL,
  `activo` int(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `titulo`, `categoria_id`, `precio`, `garantia`, `descripcion1`, `descripcion2`, `descripcion3`, `imagen1`, `imagen2`, `imagen3`, `activo`) VALUES
(1, 'TECLADO MECÁNICO', 2, '21001', 6, 'Teclado Alloy Origins HyperX.El HyperX Alloy Origins™ Core es un teclado ultracompacto y resistente sin zona numérica conconmutadores mecánicos HyperX personalizados diseñados para proporcionar a los jugadores la mejor combinación de estilo, rendimiento y fiabilidad. Estos conmutadores de teclas tienen LED expuestospara una iluminación deslumbrante con una fuerza de actuación y una distancia de recorridoelegantemente equilibrada para una capacidad de respuesta y precisión. Alloy Origins Core está fabricado con un cuerpo de aluminio completo para que permanezca rígido y estable cuando se presionan las teclas, y también cuenta con patas de teclado que le permiten elegir entre tres niveles de inclinación diferentes. Su diseño TKL elegante y compacto libera espacio para el movimiento del ratón en escritorios donde el espacio está muy cotizado, y también cuenta con un cable USB tipo C desmontable para una portabilidad suprema.  ', 'Personaliza tu iluminación, crea macros y ajusta el modo de juego con el software HyperX NGENUITY. Este programa potente pero facil de usar te permite configurar la iluminación por tecla, tener efectos de iluminacion deslumbrantes y agregar decenas de otros toques personalizados a tus productos compatibles con NGENUITY.', '', 'teclado.png', '', NULL, 1),
(2, 'Auriculares Gamer Corsair H50', 1, '25000', 12, '¡Experimentá la adrenalina de sumergirte en la escena de otra manera! Tener auriculares específicos para jugar cambia completamente tu experiencia en cada partida. Con los Corsair HS50 no te perdés ningún detalle y escuchás el audio tal y como fue diseñado por los creadores.', 'El formato perfecto para vos\nEl diseño over-ear brinda una comodidad insuperable gracias a sus suaves almohadillas. Al mismo tiempo, su sonido envolvente del más alto nivel se convierte en el protagonista de la escena.', '', 'auris.png', '', NULL, 1),
(3, 'Joystick  Xbox Serie X', 4, '36000', 12, 'Control preciso\nEste mando combina funciones revolucionarias mientras conserva precisión, comodidad y exactitud en cada movimiento. Gracias a su ergonomía especialmente pensada para la posición de tu mano, podés pasar horas jugando con total confort.', 'Mayor comodidad y realismo\nTe permite jugar sin necesidad de que haya cables de por medio. Está pensado no solamente para controlar mejor tus videojuegos, sino también para aumentar su realismo y experiencia.', 'Activá el Bluetooth\nCuenta con conexión Bluetooth de alta tecnología para usarlo en cualquier ordenador o dispositivo; ya no necesitarás de aplicaciones de terceros ni cable USB. Además, posee gran capacidad antiinterferente, fácil manejo y señal de conexión estable.', 'joyxbox.png', '', NULL, 1),
(4, 'Monitor gamer curvo Samsung F390 Series C24F390FH', 5, '43999', 12, 'Samsung está fielmente comprometida en brindar productos de calidad y que contribuyan a crear un mejor futuro para las personas. Como empresa líder en la industria tecnológica uno de sus objetivos principales es desarrollar avanzadas e innovadoras soluciones. Es por ello que con este monitor tendrás y disfrutarás de una gran experiencia visual en todo momento.', 'Un monitor a tu medida\nCon tu pantalla LED no solo ahorrás energía, ya que su consumo es bajo, sino que vas a ver colores nítidos y definidos en tus películas o series favoritas.', 'Una experiencia visual de calidad\nEste monitor de 24 pulgadas te va a resultar cómodo para estudiar, trabajar o ver una película en tus tiempos de ocio. Asimismo, su resolución de 1920 x 1080 te permite disfrutar de momentos únicos gracias a una imagen de alta fidelidad. Su tiempo de respuesta de 4 ms lo hace ideal para gamers y cinéfilos porque es capaz de mostrar imágenes en movimiento sin halos o bordes borrosos.', 'imagen1-1666739568791.png', '', NULL, 1),
(5, 'Joystick Razer Wolverine ', 4, '123', 6, 'Joystick Razer Wolverine Tournament Edition negro', '', '', 'imagen1-1666745282359.png', '', NULL, 1),
(6, 'Joystick Razer Wolverine Tournament Edition negro', 4, '123', 6, 'aaa', '', '', 'imagen1-1666745828723.png', '', NULL, 1),
(7, 'auriculares Corsair H20', 1, '13000', 6, '¡Experimentá la adrenalina de sumergirte en la escena de otra manera! Tener auriculares específicos para jugar cambia completamente tu experiencia en cada partida. Con los Corsair HS35 Stereo no te perdés ningún detalle y escuchás el audio tal y como fue diseñado por los creadores.', 'El formato perfecto para vos El diseño over-ear brinda una comodidad insuperable gracias a sus suaves almohadillas. Al mismo tiempo, su sonido envolvente del más alto nivel se convierte en el protagonista de la escena.', '', 'imagen3-1668630452550.jfif', 'imagen2-1668630452546.png', NULL, 1),
(10, 'Razer Basilisk V2', 4, '17500', 12, 'Adaptado a tus movimientos\r\nEl mouse de juego te ofrecerá la posibilidad de marcar la diferencia y sacar ventajas en tus partidas. Su conectividad y sensor suave ayudará a que te desplaces rápido por la pantalla.', 'La funcionalidad al alcance de tu mano\r\nEl sistema de detección de movimiento óptico te permitirá mover el cursor de una manera más precisa y sensible que en los sistemas tradicionales.', 'Apto para fácil traslado\r\nNavegá rápidamente por documentos y páginas web gracias su diseño ultra delgado, ergonómico, liviano y conveniente para llevar a donde quieras o viajar.', 'imagen1-1671048114275.png', 'imagen2-1671048114277.png', 'logo-img.png', 1),
(11, 'Teclado Gamer Hydra Con Luz Rgb', 2, '8000', 6, '¡Teclado ideal para iniciarte en el mundo gamer ! Este modelo de The Game House se destaca por brindar comodidad y diseño para adentrarte en el mundo del gaming y el stream.  ', 'Distinción a todo color\r\nSu retroiluminación le da un toque diferente a tu equipo y resalta su composición cuando es utilizado en espacios poco iluminados.', 'Tecnología antighosting\r\nEste dispositivo tiene teclas antighosting. Esta cualidad es indispensable si requerís de un uso intensivo del periférico. Gracias a esto podrás evitar fallas al tocar varias teclas al mismo tiempo.', 'imagen1-1671144045933.png', 'imagen2-1671144045934.png', 'logo-img.png', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(10) UNSIGNED NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `apellido` varchar(100) NOT NULL,
  `email` varchar(255) NOT NULL,
  `telefono` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `categoria_id` int(2) NOT NULL,
  `image` varchar(255) NOT NULL,
  `activo` int(1) NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `apellido`, `email`, `telefono`, `username`, `password`, `categoria_id`, `image`, `activo`) VALUES
(1, 'Juan', 'Rusconi', 'juan@perichsone.com', '112222333322', 'juan', '$2a$10$QKC7HHcyZgCmhBq8E3MQlu2SJYLC1ZL1isUo2h.X.apfFbldEixUa', 1, 'image-1670891309422.jpeg', 1),
(2, 'Diego', 'Palomino', 'diegho@perichsone.com', '111111111', 'diego', '$2a$10$QKC7HHcyZgCmhBq8E3MQlu2SJYLC1ZL1isUo2h.X.apfFbldEixUa', 2, 'generic.jpg', 0),
(3, 'Jeremias', 'Cuenca', 'jeremias@perichsone.com', '11647482844', 'jere', '$2a$10$QKC7HHcyZgCmhBq8E3MQlu2SJYLC1ZL1isUo2h.X.apfFbldEixUa', 1, 'imagenPerfil-1666646728922.jpg', 1),
(4, 'Ignacio', 'Perez', 'ignacio@perichsone.com', '111111111', 'ignacio', '$2a$10$QKC7HHcyZgCmhBq8E3MQlu2SJYLC1ZL1isUo2h.X.apfFbldEixUa', 1, 'image-1670886485753.jpeg', 1),
(5, 'Ricardo jere', 'Fort', 'Ricado@fort.com.ar', '1164748284', '', '$2a$10$QKC7HHcyZgCmhBq8E3MQlu2SJYLC1ZL1isUo2h.X.apfFbldEixUa', 2, 'imagenPerfil-1666646728922.jpg', 1),
(6, 'Ricardo', 'Fort', 'Richard@fort.com.ar', '22222', 'ri', '$2a$10$QKC7HHcyZgCmhBq8E3MQlu2SJYLC1ZL1isUo2h.X.apfFbldEixUa', 2, 'imagenPerfil-1666646728922.jpg', 0),
(7, 'Lionel', 'Messi', 'leo@messi.com.ar', '11562321', 'Leito', '$2a$10$QKC7HHcyZgCmhBq8E3MQlu2SJYLC1ZL1isUo2h.X.apfFbldEixUa', 2, 'imagenPerfil-1666647015390.jpg', 1),
(8, 'Burrito', 'Ortega', 'burro@ortega.com.ar', '223213', 'asddasdas', '$2a$10$QKC7HHcyZgCmhBq8E3MQlu2SJYLC1ZL1isUo2h.X.apfFbldEixUa', 2, 'imagenPerfil-1666650244842.jpg', 1),
(9, 'IGNACIO ', 'perez123', 'ignaperez76@gmail.com', '+541132325991', 'nach', '$2a$10$QKC7HHcyZgCmhBq8E3MQlu2SJYLC1ZL1isUo2h.X.apfFbldEixUa', 2, 'generic.jpg', 1),
(10, 'nuevo', 'nuevito', 'nuevo@ne.com.ar', '11-2121-2121', 'new', '$2a$10$QKC7HHcyZgCmhBq8E3MQlu2SJYLC1ZL1isUo2h.X.apfFbldEixUa', 2, 'imagenPerfil-1666659173870.png', 1),
(11, '13213', '123223', 'ignaperez76@gmail.com', '+541132325991', '2321231', '$2a$10$QKC7HHcyZgCmhBq8E3MQlu2SJYLC1ZL1isUo2h.X.apfFbldEixUa', 2, 'generic.jpg', 1),
(12, 'nacho', 'p', 'ignaperez76@gmail.com', '+541132325991', 'nacho1', '$2a$10$QKC7HHcyZgCmhBq8E3MQlu2SJYLC1ZL1isUo2h.X.apfFbldEixUa', 2, 'generic.jpg', 1),
(13, 'Carlos', 'Menem', 'carlitos1930@hotmail.com', '3534044222', 'Menem', '$2a$10$gnauDPyaAnn6pfJ/oDJ4iuIS85xRwEPWQQW2wgVbgi3vupTXRKRW2', 2, 'imagenPerfil-1668292907266.png', 1),
(14, 'Carlos', 'Garga', 'carlos28@gmail.com', '1123456213', 'calos23', '$2a$10$qAmrmkNQAG6Cys/6/ePLbeUlXxNAX3xvFi38cfQVhJx5BZT9cC3vO', 2, 'generic.jpg', 0),
(15, 'nacho1222222', '222222', 'ignaperez716@gmail.com', '+541132325991', 'aaaa', '$2a$10$.UM5Ac2tPLj1Lli4Tle94u9.Jy7H7HpuZwX5oCG0Rv5ytiWimXo4C', 2, 'imagenPerfil-1668731295369.jpg', 1),
(19, 'Carlos', 'Martinez', 'carlosmartinez@gmail.com', '3534260062', 'CarlosM', '$2a$10$287AR33e4CljPKfdaDqqd.ZULUmtBJni6gBxux86EXjBYxaBOVWV6', 2, 'image-1671138963455.png', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categorias_productos`
--
ALTER TABLE `categorias_productos`
  ADD KEY `id` (`id`);

--
-- Indices de la tabla `categorias_usuarios`
--
ALTER TABLE `categorias_usuarios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_categoria_usuario` (`id`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id` (`id`),
  ADD KEY `fk_categoria_producto` (`categoria_id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`) USING BTREE,
  ADD KEY `categoria` (`categoria_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categorias_productos`
--
ALTER TABLE `categorias_productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `categorias_usuarios`
--
ALTER TABLE `categorias_usuarios`
  MODIFY `id` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `fk_categoria_producto` FOREIGN KEY (`categoria_id`) REFERENCES `categorias_productos` (`id`);

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`categoria_id`) REFERENCES `categorias_usuarios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
