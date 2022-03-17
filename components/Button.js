import { useRouter } from "next/dist/client/router";

const Button = ({children, block, variant='primary', cls, color, route, ...rest}) => {
  const router = useRouter()

  return (
    <div className={block ? 'd-grid' : 'd-inline-block'}>
        <button onClick={() => router.push(route)} className={`btn btn-${variant} ${cls} fw-bold py-3 px-5 text-${color}`} {...rest}>{children}</button>
    </div>
  )
}

export default Button;
