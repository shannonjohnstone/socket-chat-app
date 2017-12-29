import { appendChildToIdElement } from '../helpers'

export function setPageReferral(referral) {
  appendChildToIdElement({
    id: 'c-page-referral__content',
    newElement: 'p',
    newElementContent: referral
  })
}
