import React from "react";

export class WorkDetails extends React.Component {
    render() {
        const { item } = this.props;
        return (
            <div className="product">
                <div className="product__inner">
                    <div className="product__title">{item.title}</div>
                    <div className="product__content">
                        <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab iure nobis facere et, tempore libero
                            quisquam blanditiis esse nesciunt delectus numquam quidem aut laborum ex illo nisi veniam perferendis
                            corrupti atque consequatur eveniet quia quo labore? Ullam numquam optio error eveniet animi, voluptas
                            tenetur odit dolores sapiente aspernatur consequatur maxime quis nihil veritatis quas temporibus
                            maiores ducimus quisquam, debitis voluptatum similique officia adipisci. Eos cupiditate deleniti,
                            dolore adipisci iusto natus eveniet illo! Explicabo omnis quae ea excepturi illum dolorum modi
                            veritatis earum maxime suscipit, harum deserunt obcaecati, maiores fugiat impedit minus ratione
                            mollitia? Vitae quisquam qui nesciunt quam! Voluptatum accusamus eaque dolorum, odit, distinctio
                            nostrum magnam optio dicta tempora iure, reprehenderit labore ipsa repellendus ratione nisi quas eius
                            debitis maiores minus. Maiores commodi accusantium alias, et, culpa at placeat obcaecati illo
                            blanditiis enim incidunt accusamus sint impedit assumenda natus eius! Animi qui deserunt alias
                            molestias dignissimos et minus eaque placeat consectetur maiores, ex nobis quo aperiam unde, dolor
                            excepturi eos corrupti ducimus fugiat laudantium vero culpa voluptatum ad. Fugit ea ex aliquam,
                            reprehenderit consequatur, maxime tempore, obcaecati eius est fugiat praesentium autem reiciendis
                            nostrum! Maiores sit qui atque quos quibusdam, minima distinctio ipsum nesciunt iste accusamus
                            debitis, est vel ducimus?
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
