import cn from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  let activeTab = tabs.find(t => t.id === activeTabId) || tabs[0];

  activeTab = (tabs && tabs.length && (tabs.find(t => t.id === activeTabId) || tabs[0]));


  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(t => (
            <li
              key={t.id}
              className={cn({ 'is-active': t.id === activeTabId })}
              data-cy="Tab"
            >
              <a
                href={`#${t.id}`}
                data-cy="TabLink"
                onClick={e => {
                  e.preventDefault();
                  if (t.id !== activeTabId) onTabSelected(t.id);
                }}
              >
                {t.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTab.content}
      </div>
    </div>
  );
};
