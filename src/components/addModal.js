import {
    Modal,
    Form, 
    Button
  } from 'react-bootstrap'
import { useState } from 'react';  
import { db } from '../db';

export default function AddModal() {
  
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  const [friend, setFriend] = useState({
    name: "",
    age: ''
  });

  const onSubmit = (event) => {
    db.friends.add(friend);
    event.preventDefault();
    setFriend({
      name: "",
      age: ''
    });
    handleClose();
  }

  
    return (
      <>
        <Button variant="btn btn-primary addBtn" onClick={handleShow}>
          +
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title style={{textAlign:'center'}}>Add a book</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Input title here."
                  autoFocus
                  value={friend.name}
                  onChange={(ev) =>
                    setFriend((friend) => ({
                      ...friend,
                      name: ev.target.value
                    }))
                  }
                      />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Content</Form.Label>
                <Form.Control as="textarea" rows={3} 
                        value={friend.age}
                        onChange={(ev) =>
                          setFriend((friend) => ({
                            ...friend,
                            age: ev.target.value
                          }))
                        }
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={onSubmit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }