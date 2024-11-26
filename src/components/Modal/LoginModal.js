import React from 'react';
import { FaFacebook, FaGoogle, FaApple, FaEnvelope, FaTimes } from 'react-icons/fa';

const LoginModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal d-block" tabIndex="-1" style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content rounded-4 border-0 p-4">
          {/* Header */}
          <div className="modal-header border-0 p-0 mb-4 position-relative">
            <button 
              type="button" 
              className="btn-close position-absolute top-0 start-0 p-3" 
              onClick={onClose}
              aria-label="Close"
            />
            <h5 className="modal-title w-100 text-center fw-bold">
              Đăng nhập hoặc đăng ký
            </h5>
          </div>

          {/* Body */}
          <div className="modal-body p-0">
            <h4 className="fw-bold mb-4">Chào mừng bạn đến với EasyBooking</h4>
            
            <form>
              <div className="mb-3">
                <select className="form-select form-select-lg mb-3 rounded-3">
                  <option value="Vietnam (+84)">Việt Nam (+84)</option>
                  <option value="USA (+1)">USA (+1)</option>
                </select>
                
                <div className="input-group">
                  <input 
                    type="tel" 
                    className="form-control form-control-lg rounded-3" 
                    placeholder="Nhập số điện thoại"
                  />
                </div>
              </div>

              <p className="text-muted small mb-4">
                Chúng tôi sẽ gọi điện hoặc nhắn tin cho bạn để xác nhận số điện thoại.
                Có áp dụng phí dữ liệu và phí tin nhắn tiêu chuẩn - 
                <a href="#" className="text-decoration-none">Chính sách về quyền riêng tư</a>
              </p>

              <button className="btn btn-danger w-100 rounded-3 py-3 mb-3">
                Tiếp tục
              </button>

              <div className="position-relative my-4">
                <hr />
                <span className="position-absolute top-50 start-50 translate-middle bg-white px-3 text-muted">
                  hoặc
                </span>
              </div>

              <div className="d-grid gap-3">
                <button className="btn btn-outline-dark rounded-3 py-3 d-flex align-items-center justify-content-center">
                  <FaFacebook className="me-2" size={20} />
                  Tiếp tục với Facebook
                </button>
                
                <button className="btn btn-outline-dark rounded-3 py-3 d-flex align-items-center justify-content-center">
                  <FaGoogle className="me-2" size={20} />
                  Tiếp tục với Google
                </button>
                
                <button className="btn btn-outline-dark rounded-3 py-3 d-flex align-items-center justify-content-center">
                  <FaApple className="me-2" size={20} />
                  Tiếp tục với Apple
                </button>
                
                <button className="btn btn-outline-dark rounded-3 py-3 d-flex align-items-center justify-content-center">
                  <FaEnvelope className="me-2" size={20} />
                  Tiếp tục bằng email
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;