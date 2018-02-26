-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Feb 25, 2018 at 09:36 PM
-- Server version: 5.7.14
-- PHP Version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mopquestionnaire`
--
CREATE DATABASE IF NOT EXISTS `mopquestionnaire` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `mopquestionnaire`;

-- --------------------------------------------------------

--
-- Table structure for table `answers`
--

CREATE TABLE `answers` (
  `id` int(11) NOT NULL,
  `text` varchar(1000) NOT NULL,
  `active` bit(1) NOT NULL DEFAULT b'1'
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `answers`
--

INSERT INTO `answers` (`id`, `text`, `active`) VALUES
(1, 'Yes', b'1'),
(2, 'No', b'1'),
(3, 'Extremely well', b'1'),
(4, 'Very well', b'1'),
(5, 'Somewhat well', b'1'),
(6, 'Not so well', b'1'),
(7, 'Not at all well', b'1'),
(8, 'Reliable', b'1'),
(9, 'High quality', b'1'),
(10, 'Useful', b'1'),
(11, 'Unique', b'1'),
(12, 'Good value for money', b'1'),
(13, 'Overpriced', b'1'),
(14, 'Impractical', b'1'),
(15, 'Ineffective', b'1'),
(16, 'Poor quality', b'1'),
(17, 'Unreliable', b'1'),
(18, 'Very satisfied', b'1'),
(19, 'Somewhat satisfied', b'1'),
(20, 'Neither satisfied nor dissatisfied', b'1'),
(21, 'Somewhat dissatisfied', b'1'),
(22, 'Very dissatisfied', b'1'),
(23, 'Very positive', b'1'),
(24, 'Somewhat positive', b'1'),
(25, 'Neutral', b'1'),
(26, 'Somewhat negative', b'1'),
(27, 'Very negative', b'1'),
(28, 'Excellent', b'1'),
(29, 'Excellent', b'1'),
(30, 'Very good', b'1'),
(31, 'Good', b'1'),
(32, 'Fair', b'1'),
(33, 'Poor', b'1'),
(34, 'Extremely organized', b'1'),
(35, 'Very organized', b'1'),
(36, 'Somewhat organized', b'1'),
(37, 'Not so organized', b'1'),
(38, 'Not at all organized', b'1');

-- --------------------------------------------------------

--
-- Table structure for table `questionnaires`
--

CREATE TABLE `questionnaires` (
  `id` int(11) NOT NULL,
  `name` varchar(500) NOT NULL,
  `description` varchar(21844) NOT NULL,
  `active` bit(1) NOT NULL DEFAULT b'1',
  `is_valid` bit(1) NOT NULL DEFAULT b'1'
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `questionnaires`
--

INSERT INTO `questionnaires` (`id`, `name`, `description`, `active`, `is_valid`) VALUES
(1, 'Customer Satisfaction Survey', 'Customer Satisfaction Survey description', b'1', b'1'),
(2, 'Market Research - Product Testing', 'Market Research - Product Testing', b'1', b'1'),
(3, 'General Event Feedback', 'General event feedback description', b'1', b'1'),
(6, 'Test', 'Test', b'0', b'1');

-- --------------------------------------------------------

--
-- Table structure for table `questionnaires_questions`
--

CREATE TABLE `questionnaires_questions` (
  `id` int(11) NOT NULL,
  `questionnaire_id` int(11) NOT NULL,
  `question_id` int(11) NOT NULL,
  `active` bit(1) NOT NULL DEFAULT b'1',
  `is_valid` bit(1) NOT NULL DEFAULT b'1'
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `questionnaires_questions`
--

INSERT INTO `questionnaires_questions` (`id`, `questionnaire_id`, `question_id`, `active`, `is_valid`) VALUES
(1, 1, 1, b'1', b'1'),
(2, 1, 2, b'1', b'1'),
(3, 1, 3, b'1', b'1'),
(4, 1, 4, b'1', b'1'),
(5, 1, 5, b'1', b'1'),
(6, 2, 2, b'1', b'1'),
(7, 2, 4, b'1', b'1'),
(8, 2, 5, b'1', b'1'),
(9, 2, 6, b'1', b'1'),
(10, 3, 7, b'1', b'1'),
(11, 3, 8, b'1', b'1'),
(12, 3, 9, b'1', b'1'),
(13, 3, 10, b'1', b'1'),
(14, 3, 11, b'1', b'1');

-- --------------------------------------------------------

--
-- Table structure for table `questions`
--

CREATE TABLE `questions` (
  `id` int(11) NOT NULL,
  `text` varchar(1000) NOT NULL,
  `question_type_id` int(11) NOT NULL,
  `active` bit(1) NOT NULL DEFAULT b'1'
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `questions`
--

INSERT INTO `questions` (`id`, `text`, `question_type_id`, `active`) VALUES
(1, 'Overall, how satisfied or dissatisfied are you with our company?', 4, b'1'),
(2, 'Which of the following words would you use to describe our products? Select all that apply.', 3, b'1'),
(3, 'How well do our products meet your needs?', 4, b'1'),
(4, 'Are you going to purchase any of our product again?', 2, b'1'),
(5, 'Do you have any other comments, questions or concerns?', 1, b'1'),
(6, 'What is your first reaction to the product?', 4, b'1'),
(7, 'Overall, how would you rate the event?', 4, b'1'),
(8, 'Did you like the event?', 2, b'1'),
(10, 'Is there anything else you\'d like to share about the event?', 1, b'1'),
(11, 'How organized was the event?', 4, b'1');

-- --------------------------------------------------------

--
-- Table structure for table `questions_answers`
--

CREATE TABLE `questions_answers` (
  `id` int(11) NOT NULL,
  `question_id` int(11) NOT NULL,
  `answer_id` int(11) DEFAULT NULL,
  `active` bit(1) NOT NULL DEFAULT b'1',
  `is_valid` bit(1) NOT NULL DEFAULT b'1'
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `questions_answers`
--

INSERT INTO `questions_answers` (`id`, `question_id`, `answer_id`, `active`, `is_valid`) VALUES
(1, 1, 18, b'1', b'1'),
(2, 1, 19, b'1', b'1'),
(3, 1, 20, b'1', b'1'),
(4, 1, 21, b'1', b'1'),
(5, 1, 22, b'1', b'1'),
(6, 2, 8, b'1', b'1'),
(7, 2, 9, b'1', b'1'),
(8, 2, 10, b'1', b'1'),
(9, 2, 11, b'1', b'1'),
(10, 2, 12, b'1', b'1'),
(11, 2, 13, b'1', b'1'),
(12, 2, 14, b'1', b'1'),
(13, 2, 15, b'1', b'1'),
(14, 2, 16, b'1', b'1'),
(15, 2, 17, b'1', b'1'),
(16, 3, 3, b'1', b'1'),
(17, 3, 4, b'1', b'1'),
(18, 3, 5, b'1', b'1'),
(19, 3, 6, b'1', b'1'),
(20, 3, 7, b'1', b'1'),
(21, 4, 1, b'1', b'1'),
(22, 4, 2, b'1', b'1'),
(23, 5, NULL, b'1', b'1'),
(24, 6, 23, b'1', b'1'),
(25, 6, 24, b'1', b'1'),
(26, 6, 25, b'1', b'1'),
(27, 6, 26, b'1', b'1'),
(28, 6, 27, b'1', b'1'),
(29, 7, 29, b'1', b'1'),
(30, 7, 30, b'1', b'1'),
(31, 7, 31, b'1', b'1'),
(32, 7, 32, b'1', b'1'),
(33, 7, 33, b'1', b'1'),
(34, 8, 1, b'1', b'1'),
(35, 8, 2, b'1', b'1'),
(36, 10, NULL, b'1', b'1'),
(37, 11, 34, b'1', b'1'),
(38, 11, 35, b'1', b'1'),
(39, 11, 36, b'1', b'1'),
(40, 11, 37, b'1', b'1'),
(41, 11, 38, b'1', b'1');

-- --------------------------------------------------------

--
-- Table structure for table `question_types`
--

CREATE TABLE `question_types` (
  `id` int(11) NOT NULL,
  `name` varchar(500) NOT NULL,
  `description` varchar(21844) NOT NULL,
  `active` bit(1) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `question_types`
--

INSERT INTO `question_types` (`id`, `name`, `description`, `active`) VALUES
(1, 'Text', 'Free text input', b'1'),
(2, 'Yes-No', 'Yes-No answers', b'1'),
(3, 'Multiple choice', 'Multiple choice', b'1'),
(4, 'Single choice', 'Single choice', b'1');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `active` bit(1) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`, `active`) VALUES
(1, 'Administrator', b'1'),
(2, 'User', b'1');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `email` varchar(30) NOT NULL,
  `hashedpassword` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstname`, `lastname`, `email`, `hashedpassword`) VALUES
(6, 'Admin', 'Admin', 'admin@domain.ba', '$2a$10$4u4dJ6pmVeSF2QFelLiIVe7PBhnpZZwiI8fXzwfRowzvbXR1JjwUS'),
(2, '', '', 'naida', '$2a$10$HfOqK/K0bhoFhgEedrJoCu4kZ08I6/.vJ4rnUCSzfdI18WRUgPKCy'),
(11, 'User3', 'User3', 'user3@domain.com', '$2a$10$Ywn9//BtQlpsgSIxZvKHyOuMflmopD0pDmxVARyrcTkgFgv2hgM9a'),
(12, 'user4', 'user4', 'user4@domain.ba', '$2a$10$2Yo8LJj5/2yYmQSC49cw5eBhD4q/Rq6OESV45Lmni2aecpyiypzQG'),
(10, 'user2', 'user2', 'user2', '$2a$10$M4WF/GK3nLRvwkDU04qrOeHPv9OwOEgNjlEDNgPbdr5t7tE0Fx3mi');

-- --------------------------------------------------------

--
-- Table structure for table `users_answers`
--

CREATE TABLE `users_answers` (
  `id` int(11) NOT NULL,
  `question_answer_id` int(11) DEFAULT NULL,
  `text_answer` varchar(5000) DEFAULT NULL,
  `users_questionnaire_id` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users_answers`
--

INSERT INTO `users_answers` (`id`, `question_answer_id`, `text_answer`, `users_questionnaire_id`) VALUES
(1, 3, NULL, 2),
(2, 7, NULL, 2),
(3, 8, NULL, 2),
(4, 17, NULL, 2),
(103, 24, NULL, 24),
(102, 23, 'test', 24),
(101, 21, NULL, 24),
(100, 6, NULL, 24);

-- --------------------------------------------------------

--
-- Table structure for table `users_questionnaires`
--

CREATE TABLE `users_questionnaires` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `questionnaire_id` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users_questionnaires`
--

INSERT INTO `users_questionnaires` (`id`, `user_id`, `questionnaire_id`) VALUES
(2, 10, 1),
(24, 10, 2);

-- --------------------------------------------------------

--
-- Table structure for table `users_roles`
--

CREATE TABLE `users_roles` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `role_id` int(11) NOT NULL,
  `active` bit(1) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users_roles`
--

INSERT INTO `users_roles` (`id`, `user_id`, `role_id`, `active`) VALUES
(3, 6, 1, b'1'),
(2, 2, 2, b'1'),
(4, 10, 2, b'1'),
(5, 11, 2, b'1'),
(6, 12, 2, b'1');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `answers`
--
ALTER TABLE `answers`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `questionnaires`
--
ALTER TABLE `questionnaires`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `questionnaires_questions`
--
ALTER TABLE `questionnaires_questions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD KEY `fk_questionnaire_id` (`questionnaire_id`),
  ADD KEY `fk_question_id` (`question_id`);

--
-- Indexes for table `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD KEY `fk_question_type_id` (`question_type_id`);

--
-- Indexes for table `questions_answers`
--
ALTER TABLE `questions_answers`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD KEY `fk_question_id` (`question_id`),
  ADD KEY `fk_answer_id` (`answer_id`);

--
-- Indexes for table `question_types`
--
ALTER TABLE `question_types`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `user_id` (`id`);

--
-- Indexes for table `users_answers`
--
ALTER TABLE `users_answers`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD KEY `fk_question_answer_id` (`question_answer_id`);

--
-- Indexes for table `users_questionnaires`
--
ALTER TABLE `users_questionnaires`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD KEY `fk_user_id` (`user_id`),
  ADD KEY `fk_questionnaire_id` (`questionnaire_id`);

--
-- Indexes for table `users_roles`
--
ALTER TABLE `users_roles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD KEY `fk_user_id` (`user_id`),
  ADD KEY `fk_role_id` (`role_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `answers`
--
ALTER TABLE `answers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;
--
-- AUTO_INCREMENT for table `questionnaires`
--
ALTER TABLE `questionnaires`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `questionnaires_questions`
--
ALTER TABLE `questionnaires_questions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
--
-- AUTO_INCREMENT for table `questions`
--
ALTER TABLE `questions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- AUTO_INCREMENT for table `questions_answers`
--
ALTER TABLE `questions_answers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;
--
-- AUTO_INCREMENT for table `question_types`
--
ALTER TABLE `question_types`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT for table `users_answers`
--
ALTER TABLE `users_answers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=108;
--
-- AUTO_INCREMENT for table `users_questionnaires`
--
ALTER TABLE `users_questionnaires`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
--
-- AUTO_INCREMENT for table `users_roles`
--
ALTER TABLE `users_roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
