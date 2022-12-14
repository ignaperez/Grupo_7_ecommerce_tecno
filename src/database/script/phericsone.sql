-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 13-12-2022 a las 01:37:37
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.1.2

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
  `nombreCategoria` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `categorias_productos`
--

INSERT INTO `categorias_productos` (`id`, `nombreCategoria`) VALUES
(1, 'Auriculares'),
(2, 'Teclados'),
(3, 'Mouse'),
(4, 'Joystick'),
(5, 'Monitores');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias_usuarios`
--

CREATE TABLE `categorias_usuarios` (
  `id_categoria` int(2) NOT NULL,
  `categoria` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `categorias_usuarios`
--

INSERT INTO `categorias_usuarios` (`id_categoria`, `categoria`) VALUES
(1, 'Administrador'),
(2, 'Usuario');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(11) NOT NULL,
  `titulo` varchar(255) NOT NULL,
  `categoria` int(1) NOT NULL,
  `precio` decimal(8,0) NOT NULL,
  `garantia` int(2) NOT NULL,
  `descripcion1` text NOT NULL,
  `descripcion2` text DEFAULT NULL,
  `descripcion3` text DEFAULT NULL,
  `imagen1` varchar(255) DEFAULT NULL,
  `imagen2` varchar(255) DEFAULT NULL,
  `imagen3` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `titulo`, `categoria`, `precio`, `garantia`, `descripcion1`, `descripcion2`, `descripcion3`, `imagen1`, `imagen2`, `imagen3`) VALUES
(1, 'TECLADO MECÁNICO', 1, '21001', 6, 'Teclado Alloy Origins HyperX.El HyperX Alloy Origins™ Core es un teclado ultracompacto y resistente sin zona numérica conconmutadores mecánicos HyperX personalizados diseñados para proporcionar a los jugadores la mejor combinación de estilo, rendimiento y fiabilidad. Estos conmutadores de teclas tienen LED expuestospara una iluminación deslumbrante con una fuerza de actuación y una distancia de recorridoelegantemente equilibrada para una capacidad de respuesta y precisión. Alloy Origins Core está fabricado con un cuerpo de aluminio completo para que permanezca rígido y estable cuando se presionan las teclas, y también cuenta con patas de teclado que le permiten elegir entre tres niveles de inclinación diferentes. Su diseño TKL elegante y compacto libera espacio para el movimiento del ratón en escritorios donde el espacio está muy cotizado, y también cuenta con un cable USB tipo C desmontable para una portabilidad suprema.  ', 'Personaliza tu iluminación, crea macros y ajusta el modo de juego con el software HyperX NGENUITY. Este programa potente pero facil de usar te permite configurar la iluminación por tecla, tener efectos de iluminacion deslumbrantes y agregar decenas de otros toques personalizados a tus productos compatibles con NGENUITY.', '', 'teclado.png', '', NULL),
(2, 'Auriculares Gamer Corsair H50', 1, '25000', 12, '¡Experimentá la adrenalina de sumergirte en la escena de otra manera! Tener auriculares específicos para jugar cambia completamente tu experiencia en cada partida. Con los Corsair HS50 no te perdés ningún detalle y escuchás el audio tal y como fue diseñado por los creadores.', 'El formato perfecto para vos\nEl diseño over-ear brinda una comodidad insuperable gracias a sus suaves almohadillas. Al mismo tiempo, su sonido envolvente del más alto nivel se convierte en el protagonista de la escena.', '', 'auris.png', '', NULL),
(3, 'Joystick  Xbox Serie X', 1, '36000', 12, 'Control preciso\nEste mando combina funciones revolucionarias mientras conserva precisión, comodidad y exactitud en cada movimiento. Gracias a su ergonomía especialmente pensada para la posición de tu mano, podés pasar horas jugando con total confort.', 'Mayor comodidad y realismo\nTe permite jugar sin necesidad de que haya cables de por medio. Está pensado no solamente para controlar mejor tus videojuegos, sino también para aumentar su realismo y experiencia.', 'Activá el Bluetooth\nCuenta con conexión Bluetooth de alta tecnología para usarlo en cualquier ordenador o dispositivo; ya no necesitarás de aplicaciones de terceros ni cable USB. Además, posee gran capacidad antiinterferente, fácil manejo y señal de conexión estable.', 'joyxbox.png', '', NULL),
(4, 'Monitor gamer curvo Samsung F390 Series C24F390FH', 1, '43999', 12, 'Samsung está fielmente comprometida en brindar productos de calidad y que contribuyan a crear un mejor futuro para las personas. Como empresa líder en la industria tecnológica uno de sus objetivos principales es desarrollar avanzadas e innovadoras soluciones. Es por ello que con este monitor tendrás y disfrutarás de una gran experiencia visual en todo momento.', 'Un monitor a tu medida\nCon tu pantalla LED no solo ahorrás energía, ya que su consumo es bajo, sino que vas a ver colores nítidos y definidos en tus películas o series favoritas.', 'Una experiencia visual de calidad\nEste monitor de 24 pulgadas te va a resultar cómodo para estudiar, trabajar o ver una película en tus tiempos de ocio. Asimismo, su resolución de 1920 x 1080 te permite disfrutar de momentos únicos gracias a una imagen de alta fidelidad. Su tiempo de respuesta de 4 ms lo hace ideal para gamers y cinéfilos porque es capaz de mostrar imágenes en movimiento sin halos o bordes borrosos.', 'imagen1-1666739568791.png', '', NULL),
(5, 'Joystick Razer Wolverine ', 1, '123', 6, 'Joystick Razer Wolverine Tournament Edition negro', '', '', 'imagen1-1666745282359.png', '', NULL),
(6, 'Joystick Razer Wolverine Tournament Edition negro', 1, '123', 6, 'aaa', '', '', 'imagen1-1666745828723.png', '', NULL),
(7, 'auris', 1, '13000', 6, 'hola', '', '', 'imagen3-1668630452550.jfif', 'imagen2-1668630452546.png', NULL);

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
  `categoria` int(2) NOT NULL,
  `image` varchar(255) NOT NULL,
  `activo` int(1) NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `apellido`, `email`, `telefono`, `username`, `password`, `categoria`, `image`, `activo`) VALUES
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
(15, 'nacho1222222', '222222', 'ignaperez716@gmail.com', '+541132325991', 'aaaa', '$2a$10$.UM5Ac2tPLj1Lli4Tle94u9.Jy7H7HpuZwX5oCG0Rv5ytiWimXo4C', 2, 'imagenPerfil-1668731295369.jpg', 1);

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
  ADD PRIMARY KEY (`id_categoria`),
  ADD KEY `id_categoria_usuario` (`id_categoria`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id` (`id`),
  ADD KEY `fk_categoria_producto` (`categoria`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD UNIQUE KEY `id` (`id`) USING BTREE,
  ADD KEY `categoria` (`categoria`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categorias_productos`
--
ALTER TABLE `categorias_productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `categorias_usuarios`
--
ALTER TABLE `categorias_usuarios`
  MODIFY `id_categoria` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `fk_categoria_producto` FOREIGN KEY (`categoria`) REFERENCES `categorias_productos` (`id`);

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`categoria`) REFERENCES `categorias_usuarios` (`id_categoria`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
