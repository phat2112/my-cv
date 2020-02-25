import React,{useState} from 'react';
import PropTypes from 'prop-types';

const WithLoading = LoadingComponent => {
    const UpdateLoading = () => {
        const [loading, setLoading] = useState(false)
        return(
            <LoadingComponent loading={loading} setLoading={setLoading}/>
        )  
    }
}
WithLoading.propTypes = {
    
};

export default WithLoading;