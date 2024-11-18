import { Table } from "antd";
import { Modal, Button } from "antd";
import { Input, Space } from "antd";
import React, { useState, useEffect } from "react";
import './ban.css'

function Ban()
{
    const [data, setData] = useState([]); 
    const [loading, setLoading] = useState(true); 

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
        const newData = [{ id: v_id, name: v_name }, ...data];
        setData(newData);

        const data_add = {
            name: v_name,
            id: v_id
        };
    
        fetch("https://dev.lcdkhoacntt1-ptit.tech/api/department/create", {
            method: "POST", 
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data_add)  // Chuyển đối tượng JS thành chuỗi JSON
        })
        .then((response) => response.json())  // Chuyển phản hồi JSON thành đối tượng JavaScript
        .then((result) => {
            console.log("Success:", result);
        })
        .catch((error) => console.error("Error:", error));

        setVId("");
        setVName("");
        
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        setVId("");
        setVName("");
    };

    const [v_id, setVId] = useState(""); 
    const [v_name, setVName] = useState("");

    // xóa
    const [open, setOpen] = useState(false);
    
    const showModal_remove = () => {
        setOpen(true);
    };

    const handleOk_remove = () => {
        
        setOpen(false);
        const v_id_remove = document.getElementById("id_remove").value;
        console.log(v_id_remove)
        
        fetch(`https://dev.lcdkhoacntt1-ptit.tech/api/department/${v_id_remove}` , {
            method: 'DELETE',  
            headers: {
                'Accept': 'application/json',
            }
        }) 
            .then((response) => response.json())
            .then(() => {
                window.location.reload();
            })
            .catch((error) => console.error("Error:", error));
          
        
        
    };
    
    const handleCancel_remove = () => {
        console.log('Clicked cancel button');
        setOpen(false);
    };

    const columns = [
        {
          title: "ID",
          dataIndex: "id", 
          key: "id",
        },
        {
          title: "Tên",
          dataIndex: "name", 
          key: "name",
        },
      ];

  // Hàm gọi API
  useEffect(() => {
    fetch("https://dev.lcdkhoacntt1-ptit.tech/api/department/") 
      .then((response) => response.json())
      .then((result) => {
        setData(result); 
        setLoading(false); 
      })
      .catch((error) => console.error("Error:", error));
  }, []);

    


  if (loading) {
    return (
        <div className="ban_container">
            <p>Loading...</p>;
        </div>
    )

    
  }
  else
  return (
    <div className="ban_container">
      <h1>Danh sách</h1>
      
        <Table
          dataSource={data} 
          columns={columns} 
          rowKey="id"
        />

        <Button className="ban_btn" type="primary" onClick={showModal}>
            Thêm
        </Button>
        <Modal title="Thêm một dòng thông tin" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <Space.Compact>
                <Input placeholder="ID" value={v_id} onChange={(e) => setVId(e.target.value)} style={{ width: '20%' }} />
                <Input placeholder="Tên" value={v_name} onChange={(e) => setVName(e.target.value)} style={{ width: '80%' }} />
            </Space.Compact>
        </Modal>


        <Button className="ban_btn" color="danger" variant="solid" onClick={showModal_remove}>
            Xóa
        </Button>
        <Modal
            title="Vui lòng điền ID cần xóa"
            open={open}
            onOk={handleOk_remove}
            onCancel={handleCancel_remove}
        >
            <Space.Compact>
                <Input placeholder="ID" id="id_remove" style={{ width: '50%' }} />
            </Space.Compact>
        </Modal>
        
      
    </div>
  );
}

export default Ban;