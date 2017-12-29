import { appendChildTextElementToIdElement } from '../helpers'

export function setPageReferral(referral) {
  appendChildTextElementToIdElement({
    id: 'c-page-referral__content',
    newElement: 'p',
    newElementContent: referral
  })
}
