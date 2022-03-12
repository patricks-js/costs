import React from 'react';

import { Container } from './styles';
import { FaInstagram, FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa'

export const Footer = () => {
  return (
      <footer>
          <Container>
                <ul>
                    <li><a href=""><FaInstagram /></a></li>
                    <li><a href=""><FaGithub /></a></li>
                    <li><a href=""><FaLinkedin /></a></li>
                </ul>
                <blockquote>Made with <FaHeart /> by <cite>Lucas Patrick</cite></blockquote>
                <p><span>Costs</span> &copy; 2022</p>
          </Container>
      </footer>
  )
}
