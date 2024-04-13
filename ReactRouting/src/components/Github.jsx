import { useLoaderData } from 'react-router-dom'

function Github() {
  let respose = useLoaderData()
  return (
    <>
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Bitcoin: {respose.bpi.USD.rate}</div>
    </>
  )
}
export default Github

