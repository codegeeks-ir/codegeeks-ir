import DefaultLayout from 'layouts/DefaultLayout'
import PageHeader from 'components/PageHeader'
import Filter from 'components/collection/Filter'
import Pagination from 'components/collection/Pagination'
import PostItem from 'components/collection/item/PostItem'

export default function Blog({ content }) {
    return (
      <DefaultLayout>
        <div id="#collection" className="collection-container" 
            x-data="collection" dataPath='/assets/blog-data.json'>
            <PageHeader />
            <div className="page-header"><h1>{{ title }}</h1></div>
            <Filter />

            {/* x-for="item in results" */}
                <PostItem />    
            <Pagination />
            <Authors />
        </div>
      <DefaultLayout/>
    );
}
