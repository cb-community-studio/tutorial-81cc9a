import { Button } from "primereact/button";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import client from "../../services/restClient";
import { InputText } from 'primereact/inputtext';

const SingleColusTrainingSimpleAppJsonPage = (props) => {
    const navigate = useNavigate();
    const urlParams = useParams();
    const [_entity, set_entity] = useState();
    
    useEffect(() => {
        //on mount
        client
            .service("colusTrainingSimpleAppJson")
            .get(urlParams.singleColusTrainingSimpleAppJsonId, { query: { $populate: [] }})
            .then((res) => {
                set_entity(res || {});
                
            })
            .catch((error) => {
                console.log({ error });
                props.alert({ title: "ColusTrainingSimpleAppJson", type: "error", message: error.message || "Failed get colusTrainingSimpleAppJson" });
            });
    }, []);

    const setValByKey = (key, val) => {
        let new_entity = { ..._entity, [key]: val };
        set_entity(new_entity);
    };

    const goBack = () => {
        navigate("/colusTrainingSimpleAppJson", { replace: true });
    };
    return (
        <div className="col-12 flex flex-column align-items-center">
            <div className="col-10">
                <div className="flex align-items-center justify-content-start">
                    <Button className="p-button-text" icon="pi pi-chevron-left" onClick={() => goBack()} />
                    <h3 className="m-0">ColusTrainingSimpleAppJson</h3>
                </div>
                <p>colusTrainingSimpleAppJson/{urlParams.singleColusTrainingSimpleAppJsonId}</p>
            </div>
            <div className="grid col-10">
                <div className="card w-full">
            <label className="text-sm text-primary">Projectname</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.projectname}</p></div>
                    <label className="text-sm text-primary">Description</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.description}</p></div>
                    <label className="text-sm text-primary">Auth</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.auth}</p></div>
                    <label className="text-sm text-primary">Database</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.database}</p></div>
                    <label className="text-sm text-primary">Stack</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.stack}</p></div>
                    <label className="text-sm text-primary">Services</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.services}</p></div>
            
                </div>
            </div>
        </div>
    );
};

const mapState = (state) => {
    return {};
};
const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data),
    //
});

export default connect(mapState, mapDispatch)(SingleColusTrainingSimpleAppJsonPage);
