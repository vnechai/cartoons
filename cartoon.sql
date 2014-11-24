-- phpMyAdmin SQL Dump
-- version 4.2.6deb1
-- http://www.phpmyadmin.net
--
-- Хост: localhost
-- Время создания: Ноя 22 2014 г., 18:02
-- Версия сервера: 5.5.40-0ubuntu1
-- Версия PHP: 5.5.12-2ubuntu4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- База данных: `cartoon`
--

-- --------------------------------------------------------

--
-- Структура таблицы `cartoons`
--

CREATE TABLE IF NOT EXISTS `cartoons` (
`id` int(5) NOT NULL,
  `cartoon` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `link` text COLLATE utf8_unicode_ci NOT NULL,
  `ageBottom` int(2) NOT NULL,
  `ageTop` int(2) NOT NULL,
  `gender` varchar(1) COLLATE utf8_unicode_ci NOT NULL,
  `country` varchar(3) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=8 ;

--
-- Дамп данных таблицы `cartoons`
--

INSERT INTO `cartoons` (`id`, `cartoon`, `link`, `ageBottom`, `ageTop`, `gender`, `country`) VALUES
(1, 'Чебурашка и Крокодил Гена — все серии подряд [HD]', '//www.youtube.com/embed/aMHFMdAaBTQ', 3, 4, 'y', 'r'),
(2, 'Черепашки ниндзя 4 сезон 10 серия', '//www.youtube.com/embed/lgikttWLw38', 4, 6, 'x', 'u'),
(3, 'Черепашки ниндзя 4 сезон 25 серия мультфильм для детей, качество HD', '//www.youtube.com/embed/Q9po2ON2j9E', 4, 6, 'x', 'u'),
(4, 'Покемоны: 1 сезон 11 серия - Чармандер - брошенный покемон', '//www.youtube.com/embed/c2I1LEI6Pd0', 4, 6, 'x', 'j'),
(5, 'Отчаянные бойцы Бакуган (1 сезон 4 серия)', '//www.youtube.com/embed/GDOpwKwAANI', 1, 4, 'x', 'j'),
(6, 'Люди ИКС Эволюция 5 серия - Спайк и скорость', '//www.youtube.com/embed/C9t4iLZrkYE', 2, 6, 'y', 'u'),
(7, 'Огги и Кукарачи non stop 4 сезон,4 часть', '//www.youtube.com/embed/efdRcx7fXWg', 1, 3, 'y', 'u');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cartoons`
--
ALTER TABLE `cartoons`
 ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cartoons`
--
ALTER TABLE `cartoons`
MODIFY `id` int(5) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=8;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
