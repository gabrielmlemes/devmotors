"use client";
import style from './error.module.scss'

import Link from "next/link";

const Error = () => {
  return (
    <div className={style.error}>
      <h1>Ops, essa página não existe</h1>
      <Link href="/">Voltar para home</Link>
    </div>
  );
};

export default Error;
