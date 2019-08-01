import React, { Component } from 'react'

export default  class CountryList extends Component {
    render() {
        return (
            <div className="module">
                <div className='container container__flex'>
                    <div className="grid__filter">
                        <ul className="grid__filter_list">
                            <li className="grid__filter_item grid__filter_item--active">all</li>
                            <li className="grid__filter_item">a</li>
                            <li className="grid__filter_item">b</li>
                        </ul>
                    </div>
                    <div className='grid'>
                        <div className="grid__item">
                            <a href="#" className="card img">
                                <img src="#" alt="123" />
                                <div className="card__content">
                                    <div className="card__title">England</div>
                                    <div className="card__txt">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem fugit voluptatum iste harum tempora qui, similique illo nemo soluta adipisci possimus odit beatae facilis magnam perferendis? Hic nemo corporis eius consequuntur ipsum sit illo a, suscipit architecto rerum amet cumque asperiores harum possimus ut natus assumenda dolorem pariatur commodi. Consequuntur quas totam harum laborum incidunt voluptate modi quibusdam saepe nulla rem. Quibusdam aspernatur vero veniam necessitatibus dolor rerum similique reiciendis, obcaecati assumenda beatae explicabo nulla dolorum distinctio provident, eligendi dolores corporis esse unde neque tempore id nobis sunt consequatur fugiat! Labore qui beatae iure placeat, nemo, dolores ducimus voluptas sit velit accusamus fugiat, magni autem itaque obcaecati alias minima debitis amet non aliquid quas. Quae veniam, sapiente placeat sunt nostrum veritatis quod debitis vel. Tenetur sequi corporis, deserunt sunt esse optio nemo architecto eos alias rem pariatur, reiciendis accusantium quaerat consectetur aut iure autem sit non ipsam fugiat velit saepe praesentium! Eligendi natus vel praesentium nihil corporis, ab error quod nemo officia molestias facere aliquid consectetur dolorum dolore fugiat quae a, id cumque commodi repudiandae voluptatum. Nihil vitae quidem corporis voluptas quaerat officiis deleniti quas quod dignissimos. Iste asperiores assumenda numquam debitis, accusamus voluptatum at fugit culpa sed, quas vitae.</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}