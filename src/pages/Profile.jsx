import React from "react";

function Profile() {
  return (
    <div className="flex items-start justify-center mt-[84px]">
      {/* Sidebar */}
      <div className="h-[800px] w-[500px] flex-shrink-0 flex flex-col">
        <h1 className="text-5xl font-extrabold h-[180px]">
          Account Management
        </h1>
        <div className="flex flex-col gap-y-4">
          {[
            { icon: "fa-key", text: "ACCOUNT SIGN-IN" },
            { icon: "fa-user", text: "PERSONAL INFORMATION" },
            { icon: "fa-cart-shopping", text: "PAYMENT HISTORY" },
          ].map((item, index) => (
            <div key={index} role="button" className="flex items-center hover:text-blue-500">
              <i className={`fa-solid ${item.icon} mr-4 fa-lg`} aria-hidden="true"></i>
              <button className="font-semibold text-xl">{item.text}</button>
            </div>
          ))}
        </div>
      </div>
      {/* Content Section */}
      <div className="flex flex-col w-[1000px] space-y-8">
        <div className="h-[400px] gray-color flex items-center justify-center">
          ACCOUNT SIGN-IN
        </div>
        <div className="h-[300px] gray-color flex items-center justify-center">
          PERSONAL INFORMATION
        </div>
        {/* Thêm nội dung mới */}
        <div className="h-[300px] gray-color flex items-center justify-center">
          NEW CONTENT
        </div>
      </div>
    </div>
  );
}

export default Profile;
