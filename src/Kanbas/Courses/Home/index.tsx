import ModuleList from "../Modules/List";
import "./index.css";

function Home() {
  return (
    <div className="overflow-y-scroll bottom-0 end-0" style={{display: 'flex'}}>
      <div 
    style={{  margin: '10px'}}>
      <ModuleList />
      </div>
      <div style={{margin: '10px', marginLeft: '50px'}} className="flex-grow-0 me-2 d-none d-xl-block">
      <h3>Course Status</h3>
      <div>
  <button type="button" className="btn btn-dark" style={{ margin: '5px'}}>Unpublish</button>
  <button type="button" className="btn btn-success" style={{ margin: '5px'}}>Published</button>
</div>
<ul className="button-list">
  <button type="button" className="btn btn-outline-secondary">Import Existing Content</button>
  <button type="button" className="btn btn-outline-secondary">Import From Commons</button>
  <button type="button" className="btn btn-outline-secondary">Choose Home Page</button>
  <button type="button" className="btn btn-outline-secondary">View Course Stream</button>
  <button type="button" className="btn btn-outline-secondary">New Announcement</button>
  <button type="button" className="btn btn-outline-secondary">New Analytics</button>
  <button type="button" className="btn btn-outline-secondary">View Course Notifications</button>
</ul>
</div>
    </div>
  );
}
export default Home;