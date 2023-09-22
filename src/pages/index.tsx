import Header from '../components/Header'
import Link from 'next/link'
import ProductsPage from './products'
import { styled } from 'styled-components'
import Banner from '../components/Banner'
import Navigation from '@/components/Navigation'
import Layout from '@/components/_layout/layout'


export default function HomePage() {
  return (
    <>
      <ProductsPage/>
      <div id='sales'>Sale</div>
    </>
  )
}



