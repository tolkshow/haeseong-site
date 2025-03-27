import { useState } from "react";

export default function JobApplicationForm() {
  const [formData, setFormData] = useState({ name: "", phone: "", position: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("이메일 전송 실패");
      alert("지원서가 이메일로 전송되었습니다!");
      setFormData({ name: "", phone: "", position: "" });
    } catch (err) {
      console.error(err);
      alert("지원 중 오류가 발생했습니다.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 mt-8">
      <div>
        <label className="block font-medium mb-1">이름</label>
        <input type="text" name="name" required value={formData.name} onChange={handleChange}
               className="w-full border border-gray-300 px-4 py-2 rounded" />
      </div>
      <div>
        <label className="block font-medium mb-1">연락처</label>
        <input type="tel" name="phone" required value={formData.phone} onChange={handleChange}
               className="w-full border border-gray-300 px-4 py-2 rounded" />
      </div>
      <div>
        <label className="block font-medium mb-1">희망 직종</label>
        <select name="position" required value={formData.position} onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-2 rounded">
          <option value="">-- 선택하세요 --</option>
          <option value="조공">조공</option>
          <option value="기공">기공</option>
          <option value="기타">기타</option>
        </select>
      </div>
      <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition w-full sm:w-auto">
        지원하기
      </button>
    </form>
  );
}