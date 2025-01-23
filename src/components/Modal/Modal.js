import { createPortal } from 'react-dom';
import './Modal.css';

export default function Modal(props) {
  return (
    <>
      {createPortal(<Overlay {...props} />, document.getElementById('modal'))}
      {createPortal(<Backdrop />, document.getElementById('modal'))}
    </>
  );
}

function Backdrop() {
  return <div className="backdrop"></div>;
}

function Overlay(props) {
  return <div className={`overlay ${props.className}`}>{props.children}</div>;
}

    // ${props.className}: Dynamically adds additional class names passed via props.className.