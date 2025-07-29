// Reactを使うためのインポート
import * as React from 'react'
import { render } from 'react-dom'

// ビューを書いている
const Main = (<h1>Markdown Editor</h1>)

// ReactとHTMLファイルをつなぐ処理
render(Main, document.getElementById('app'))
