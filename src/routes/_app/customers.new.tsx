import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/customers/new')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_app/customers/new"!</div>
}
