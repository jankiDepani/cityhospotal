import React from 'react';
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
function CoustomCard({ value }) {
    return (
        <div className='col-md-4'>
            <Card
                style={{
                    width: '18rem'
                }}

            >
                {
                    value.url ? <img
                        alt="Sample"
                        src="https://picsum.photos/300/200"
                    />
                        : null
                }

                <CardBody>
                    <CardTitle tag="h5">
                        {value.name}
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        {value.price + "$"}
                    </CardSubtitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        {value.exipDate}
                    </CardSubtitle>
                    <CardText>
                        {value.desc}
                    </CardText>
                    {
                        value.btnData ?
                            <Button>
                                Button
                            </Button>
                            : null
                    }
                    <ShoppingCartIcon />
                </CardBody>
            </Card>
        </div>

    );
}

export default CoustomCard;