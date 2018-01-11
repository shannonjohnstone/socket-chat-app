import React from 'react'
import { Button, Header, SideMenu, FormInputAddonBtn, ReferralBanner } from './components'

const Home = () => {
  return [
    <SideMenu />,
    <main className="l-main">
      <Header
        size="small"
        position="fixed"
        container={false}
        navType="chat"
      />
      <ReferralBanner />
      <section className="c-chat">
        <div className="list c-chat__list" id="displayed-messages">
          <div className="c-chat__buttons">
            <FormInputAddonBtn />
            <Button btnText='Location' />
          </div>
        </div>
      </section>
    </main>
  ]
}

export default Home;
