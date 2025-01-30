/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const SobreLazyImport = createFileRoute('/Sobre')()
const ProjetosLazyImport = createFileRoute('/Projetos')()
const EquipeLazyImport = createFileRoute('/Equipe')()
const ContatoLazyImport = createFileRoute('/Contato')()
const ArtigosLazyImport = createFileRoute('/Artigos')()
const IndexLazyImport = createFileRoute('/')()
const PostsPostIdLazyImport = createFileRoute('/posts/$postId')()

// Create/Update Routes

const SobreLazyRoute = SobreLazyImport.update({
  path: '/Sobre',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/Sobre.lazy').then((d) => d.Route))

const ProjetosLazyRoute = ProjetosLazyImport.update({
  path: '/Projetos',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/Projetos.lazy').then((d) => d.Route))

const EquipeLazyRoute = EquipeLazyImport.update({
  path: '/Equipe',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/Equipe.lazy').then((d) => d.Route))

const ContatoLazyRoute = ContatoLazyImport.update({
  path: '/Contato',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/Contato.lazy').then((d) => d.Route))

const ArtigosLazyRoute = ArtigosLazyImport.update({
  path: '/Artigos',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/Artigos.lazy').then((d) => d.Route))

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const PostsPostIdLazyRoute = PostsPostIdLazyImport.update({
  path: '/posts/$postId',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/posts.$postId.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/Artigos': {
      preLoaderRoute: typeof ArtigosLazyImport
      parentRoute: typeof rootRoute
    }
    '/Contato': {
      preLoaderRoute: typeof ContatoLazyImport
      parentRoute: typeof rootRoute
    }
    '/Equipe': {
      preLoaderRoute: typeof EquipeLazyImport
      parentRoute: typeof rootRoute
    }
    '/Projetos': {
      preLoaderRoute: typeof ProjetosLazyImport
      parentRoute: typeof rootRoute
    }
    '/Sobre': {
      preLoaderRoute: typeof SobreLazyImport
      parentRoute: typeof rootRoute
    }
    '/posts/$postId': {
      preLoaderRoute: typeof PostsPostIdLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexLazyRoute,
  ArtigosLazyRoute,
  ContatoLazyRoute,
  EquipeLazyRoute,
  ProjetosLazyRoute,
  SobreLazyRoute,
  PostsPostIdLazyRoute,
])

/* prettier-ignore-end */
