import React from 'react'
import ReactPaginate from 'react-paginate'



const pagination = ({ data }) => {
    const [posts, setPosts] = React.useState(data.slice(0, 10))

    const PageCount = ({ selected }) => {
        const previousData = posts.length * selected
        setPosts(data.slice(previousData, previousData + 10))


    }

    return (
        <div>
            {posts.map((item) => (
                <p key={item.id}>{item.title}</p>
            ))}
            <ReactPaginate
                pageCount={data.length / 2 / 10}
                onPageChange={PageCount}
                containerClassName="flex "
                pageLinkClassName=""
                activeClassName="w-4 h-6 rounded bg-blue-500 "
                pageClassName="ml-4 flex items-center justify-center"
                previousLinkClassName="ml-4"
                nextLinkClassName="ml-4"
            />
        </div>
    )
}

export default pagination

