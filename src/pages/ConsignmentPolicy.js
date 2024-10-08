import React from 'react';
import { Container } from 'react-bootstrap';
import { Typography } from '@mui/material';
import '../assets/consignmentpolicy.css';
import Breadcrumb from "../components/breadcrumb";

const ConsignmentPolicy = () => {
    return (
        <Container>
              <Breadcrumb title="Consignment Policy" />
            <Typography variant="h5" color='#212529' className="consignment-title">
                <strong>Consignment Policy</strong>
                <span className="consignmnet-text">
                    <br />Welcome to our Consignment Policy page.
                    <br /> Please read the following carefully to understand our consignment policies and how you can consign your items with us.
                </span>
            </Typography>


            <Typography variant="body2" color='#212529' className="consignmnet-text">
                <span className="text-title"><strong>1. Consignment Conditions</strong></span>
                <br /> -The Koi fish must be purchased at <span style={{ color: 'red' }}>Koi Paradise Farm</span> and undergo a health check before consignment.
                <br /> -Consigned Koi must meet the size and quality standards required for resale by <span style={{ color: 'red' }}>Koi Paradise Farm</span>.
                <br /> -<span style={{ color: 'red' }}>Koi Paradise Farm</span> will not accept Koi that are sick or show signs of poor health for consignment.
            </Typography>



            <Typography variant="body2" color='#212529' className="consignmnet-text">
                <span className="text-title"><strong>2. Consignment Period</strong></span>
                <br /> -The consignment period can be 1, 2, or 3 months. During this time, <span style={{ color: 'red' }}>Koi Paradise Farm</span> will display and sell the Koi on behalf of the customer.
                <br /> -After the consignment period ends, the customer may either extend the consignment or retrieve the Koi.
                <br /> -If the consignment period expires and the customer does not retrieve the fish or extend the consignment, <span style={{ color: 'red' }}>Koi Paradise Farm</span> reserves the right to manage the fish as per farm policies.
            </Typography>
            <Typography variant="body2" color='#212529' className="consignmnet-text">
                <span className="text-title"><strong>3. Consignment and Care Fees</strong></span>
                <br /> -1-month consignment fee: 1,000,000 VND per month.
                <br /> -2-month consignment fee: 2,000,000 VND per month.
                <br /> -3-month consignment fee: 3,000,000 VND per month.
                <br /> The fee includes Koi care, feeding, water treatment, and health monitoring during the consignment period.
            </Typography>
            <Typography variant="body2" color='#212529' className="consignmnet-text">
                <span className="text-title"><strong>4. Sales Policy</strong></span>
                <br /> -The consigned Koi will be advertised and sold through <span style={{ color: 'red' }}>Koi Paradise Farm</span>'s online and offline sales channels.
                <br /> -When the Koi is successfully sold, the customer will receive 70% of the sale price, and <span style={{ color: 'red' }}>Koi Paradise Farm</span> will retain 30% as a commission fee.
                <br /> -The sale price will be agreed upon between the customer and <span style={{ color: 'red' }}>Koi Paradise Farm</span> before the Koi is displayed for sale.
            </Typography>
            <Typography variant="body2" color='#212529' className="consignmnet-text">
                <span className="text-title"><strong>5. Care and Risk Responsibilities</strong></span>
                <br /> -<span style={{ color: 'red' }}>Koi Paradise Farm</span> will be responsible for the care of the Koi during the consignment period, including feeding, water changes, and regular health checks.
                <br /> -If the Koi becomes ill or dies during the consignment period, <span style={{ color: 'red' }}>Koi Paradise Farm</span> will notify the customer but will not be held liable for compensation if the death is due to uncontrollable factors (natural illness, unexpected environmental factors).
                <br /> -If treatment costs arise for the Koi during the consignment period, the customer will be responsible for covering those expenses.
            </Typography>
            <Typography variant="body2" color='#212529' className="consignmnet-text">
                <span className="text-title"><strong>6. Retrieving the Koi</strong></span>
                <br /> -After the consignment period ends, if the Koi is not sold, the customer may retrieve the fish or extend the consignment period as outlined above.
                <br /> -If the customer does not contact the farm within 7 days after the consignment period ends, <span style={{ color: 'red' }}>Koi Paradise Farm</span> reserves the right to manage the fish according to internal rules.
            </Typography>
            <Typography variant="body2" color='#212529' className="consignmnet-text">
                <span className="text-title"><strong>7. Terms and Agreements</strong></span>
                <br /> -Custormers can directly contact <span style={{ color: 'red' }}>Koi Paradise Farm</span> via phone or email to discuss consignment details and others terms
                <br />-If the customer does not contact the farm within 7 days after the consignment period ends, Koi Paradise Farm reserves the right to manage the fish according to internal rules.
            </Typography>
            <Typography variant="body2" color='#212529' className="consignmnet-text">
               If you have any questions about our consignment policies, feel free to reach out to us at: <strong> info@koiparadise.com </strong> 
            </Typography>
        </Container >
    );
};

export default ConsignmentPolicy;
