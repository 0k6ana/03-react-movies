import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import type { Movie } from '../../types/movie';
import css from './MovieModal.module.css'

type MovieModalProps = {
  movie: Movie;
  onClose: () => void;
};