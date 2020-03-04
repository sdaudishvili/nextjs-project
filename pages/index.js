import { useDispatch } from 'react-redux'
import { fetchContacts } from '../redux/actions/contactsActions'

export default function Blog() {
  const dispatch = useDispatch()

  return (
    <div className="flex">
      <button
        type="button"
        className=" m-1-5 w-8-0 h-3-0 bg-primary"
        onClick={() => dispatch(fetchContacts('asdf'))}
      >
        asdf
      </button>
      <h1>My Blog</h1>
    </div>
  )
}
