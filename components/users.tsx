import { useEffect, useState } from 'react'
import { APIResponseType, UserType } from '../util/types';
import User from './user';

function Users() {
  const [usersList, setUsersList] = useState<UserType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currPage, setCurrPage] = useState<number>(1);

  useEffect(() => {
    fetch(`https://reqres.in/api/users?page=${currPage}`)
      .then( (resp) => resp.json())
      .then( (result) => {
        setUsersList(result.data);
        setCurrPage(currPage + 1);
      })
  }, [])

  const loadMoreClick = async () => {
    setIsLoading(true);

    fetch(`https://reqres.in/api/users?page=${currPage}`)
      .then( (resp) => resp.json())
      .then( (result) => {
        let userArr = usersList
        userArr.push(...result.data)

        setUsersList(userArr);
        setCurrPage(currPage + 1);
        setIsLoading(false);
      })
      .catch( (err) => {
        console.error(err);
      })
  }

  return (
    <div>
      <div className="flex justify-center mt-5">
        {usersList == null ?
          <h1>No Users Found!</h1>
          :
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 w-100">
            {
              usersList.map((datum:UserType, index:number) => {
                return(
                  <User user={datum} key={index}/>
                )
              })
            }
          </div>
        }
      </div>
      <div className='flex justify-center w-100 my-5'>
        <button
          onClick={() => loadMoreClick() }
          disabled={currPage > 2}
          className='inline-flex items-center px-4 py-2 bg-gray-900 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest active:bg-gray-900 transition ease-in-out duration-150 disabled:opacity-40'
        >
          {(isLoading)?
            <svg className="h-4 w-4 animate-spin" viewBox="3 3 18 18">
              <path
                className="fill-blue-800"
                d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"></path>
              <path
                className="fill-blue-100"
                d="M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z"></path>
            </svg>
            :
            <span>Load More</span>
          }
        </button>
      </div>
    </div>
  )
}

export default Users