const LowerLink = (isActive) => {
  return (
    <svg width="66" height="97" viewBox="0 0 66 97" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="66" height="97" rx="8" fill={isActive ? 'white' : '#EAECF0'}/>
      <circle cx="33" cy="20" r="11" fill={isActive ? '#EAECF0' : 'white'}/>
      <rect x="9" y="35" width="49" height="7" rx="3.5" fill={isActive ? '#EAECF0' : 'white'}/>
      <rect x="9" y="48" width="49" height="7" rx="3.5" fill={isActive ? '#EAECF0' : 'white'}/>
      <rect x="9" y="61" width="49" height="7" rx="3.5" fill={isActive ? '#EAECF0' : 'white'}/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M32.8013 76.0581C30.6064 76.0581 28.9053 77.6356 28.9053 79.7661C28.9053 80.8806 29.3709 81.8435 30.129 82.5088C30.1925 82.565 30.2309 82.6427 30.234 82.7265L30.2552 83.4064C30.2622 83.6233 30.4904 83.7641 30.6926 83.6772L31.4655 83.3426C31.5314 83.3141 31.6043 83.3087 31.6733 83.3272C32.0284 83.4233 32.407 83.4741 32.8013 83.4741C34.9963 83.4741 36.6974 81.8966 36.6974 79.7661C36.6974 77.6356 34.9963 76.0581 32.8013 76.0581ZM35.1405 78.9108L33.996 80.6921C33.8142 80.9752 33.4238 81.0459 33.151 80.8452L32.2408 80.1753C32.157 80.1138 32.0425 80.1145 31.9594 80.1761L30.7302 81.0913C30.5664 81.2136 30.3516 81.0206 30.4621 80.8498L31.6066 79.0685C31.7885 78.7855 32.1789 78.7147 32.4517 78.9154L33.3618 79.5854C33.4457 79.6469 33.5602 79.6461 33.6433 79.5846L34.8724 78.6693C35.0363 78.547 35.2511 78.7401 35.1405 78.9108Z" fill="#FF4A00"/>
      <path d="M19.7123 80.4559L19.9118 79.1885H18.6831V78.3647C18.6831 78.0182 18.8546 77.6795 19.4032 77.6795H19.9697V76.6003C19.6398 76.5477 19.3064 76.5192 18.9723 76.5151C17.961 76.5151 17.3007 77.1231 17.3007 78.2221V79.1885H16.1797V80.4559H17.3007V83.5214H18.6831V80.4559H19.7123Z" fill="#FF4A00"/>
      <path d="M47.8349 80.0178C47.8349 79.3729 48.3574 78.85 49.0021 78.85C49.6468 78.85 50.1696 79.3729 50.1696 80.0178C50.1696 80.6626 49.6468 81.1856 49.0021 81.1856C48.3574 81.1856 47.8349 80.6626 47.8349 80.0178ZM47.2038 80.0178C47.2038 81.0112 48.0089 81.8166 49.0021 81.8166C49.9953 81.8166 50.8004 81.0112 50.8004 80.0178C50.8004 79.0243 49.9953 78.219 49.0021 78.219C48.0089 78.219 47.2038 79.0243 47.2038 80.0178ZM50.4513 78.1476C50.4513 78.2308 50.4759 78.3121 50.5221 78.3812C50.5682 78.4504 50.6338 78.5043 50.7106 78.5361C50.7874 78.568 50.8719 78.5763 50.9534 78.5601C51.0349 78.5439 51.1098 78.5039 51.1686 78.4452C51.2274 78.3864 51.2675 78.3115 51.2837 78.23C51.3 78.1484 51.2917 78.0639 51.2599 77.9871C51.2281 77.9103 51.1743 77.8446 51.1052 77.7984C51.0361 77.7521 50.9549 77.7275 50.8717 77.7274H50.8716C50.7602 77.7275 50.6533 77.7718 50.5745 77.8505C50.4957 77.9293 50.4514 78.0362 50.4513 78.1476ZM47.5873 82.8692C47.2458 82.8537 47.0602 82.7968 46.9369 82.7487C46.7734 82.685 46.6567 82.6092 46.5341 82.4867C46.4114 82.3641 46.3355 82.2476 46.2721 82.084C46.224 81.9607 46.1672 81.775 46.1516 81.4335C46.1347 81.0642 46.1313 80.9533 46.1313 80.0178C46.1313 79.0823 46.1349 78.9717 46.1516 78.6021C46.1672 78.2606 46.2245 78.0752 46.2721 77.9516C46.3358 77.788 46.4116 77.6713 46.5341 77.5486C46.6566 77.4259 46.7731 77.35 46.9369 77.2866C47.0602 77.2385 47.2458 77.1816 47.5873 77.1661C47.9564 77.1491 48.0673 77.1457 49.0021 77.1457C49.9369 77.1457 50.0479 77.1494 50.4174 77.1661C50.7588 77.1816 50.9441 77.239 51.0677 77.2866C51.2312 77.35 51.3479 77.4261 51.4705 77.5486C51.5932 77.6712 51.6689 77.788 51.7325 77.9516C51.7806 78.0749 51.8375 78.2606 51.853 78.6021C51.87 78.9717 51.8733 79.0823 51.8733 80.0178C51.8733 80.9533 51.87 81.0639 51.853 81.4335C51.8374 81.775 51.7803 81.9606 51.7325 82.084C51.6689 82.2476 51.593 82.3643 51.4705 82.4867C51.3481 82.6091 51.2312 82.685 51.0677 82.7487C50.9444 82.7968 50.7588 82.8537 50.4174 82.8692C50.0482 82.8862 49.9373 82.8896 49.0021 82.8896C48.0669 82.8896 47.9563 82.8862 47.5873 82.8692ZM47.5583 76.5359C47.1854 76.5528 46.9307 76.612 46.7082 76.6986C46.4778 76.788 46.2827 76.908 46.0878 77.1026C45.8929 77.2973 45.7733 77.4927 45.6839 77.7232C45.5973 77.9459 45.5382 78.2006 45.5212 78.5735C45.504 78.947 45.5 79.0664 45.5 80.0178C45.5 80.9691 45.504 81.0885 45.5212 81.462C45.5382 81.835 45.5973 82.0896 45.6839 82.3123C45.7733 82.5427 45.8929 82.7383 46.0878 82.9329C46.2827 83.1275 46.4778 83.2473 46.7082 83.3369C46.9311 83.4235 47.1854 83.4827 47.5583 83.4997C47.9319 83.5166 48.051 83.5209 49.0021 83.5209C49.9532 83.5209 50.0725 83.5169 50.4459 83.4997C50.8188 83.4827 51.0734 83.4235 51.296 83.3369C51.5263 83.2473 51.7215 83.1275 51.9164 82.9329C52.1113 82.7382 52.2307 82.5427 52.3203 82.3123C52.4069 82.0896 52.4663 81.8349 52.483 81.462C52.5 81.0882 52.5039 80.9691 52.5039 80.0178C52.5039 79.0664 52.5 78.947 52.483 78.5735C52.466 78.2005 52.4069 77.9457 52.3203 77.7232C52.2307 77.4929 52.111 77.2976 51.9164 77.1026C51.7218 76.9077 51.5263 76.788 51.2963 76.6986C51.0734 76.612 50.8188 76.5526 50.4462 76.5359C50.0728 76.5189 49.9534 76.5146 49.0024 76.5146C48.0513 76.5146 47.9319 76.5186 47.5583 76.5359Z" fill="#FF4A00"/>
      <path d="M47.8349 80.0178C47.8349 79.3729 48.3574 78.85 49.0021 78.85C49.6468 78.85 50.1696 79.3729 50.1696 80.0178C50.1696 80.6626 49.6468 81.1856 49.0021 81.1856C48.3574 81.1856 47.8349 80.6626 47.8349 80.0178ZM47.2038 80.0178C47.2038 81.0112 48.0089 81.8166 49.0021 81.8166C49.9953 81.8166 50.8004 81.0112 50.8004 80.0178C50.8004 79.0243 49.9953 78.219 49.0021 78.219C48.0089 78.219 47.2038 79.0243 47.2038 80.0178ZM50.4513 78.1476C50.4513 78.2308 50.4759 78.3121 50.5221 78.3812C50.5682 78.4504 50.6338 78.5043 50.7106 78.5361C50.7874 78.568 50.8719 78.5763 50.9534 78.5601C51.0349 78.5439 51.1098 78.5039 51.1686 78.4452C51.2274 78.3864 51.2675 78.3115 51.2837 78.23C51.3 78.1484 51.2917 78.0639 51.2599 77.9871C51.2281 77.9103 51.1743 77.8446 51.1052 77.7984C51.0361 77.7521 50.9549 77.7275 50.8717 77.7274H50.8716C50.7602 77.7275 50.6533 77.7718 50.5745 77.8505C50.4957 77.9293 50.4514 78.0362 50.4513 78.1476ZM47.5873 82.8692C47.2458 82.8537 47.0602 82.7968 46.9369 82.7487C46.7734 82.685 46.6567 82.6092 46.5341 82.4867C46.4114 82.3641 46.3355 82.2476 46.2721 82.084C46.224 81.9607 46.1672 81.775 46.1516 81.4335C46.1347 81.0642 46.1313 80.9533 46.1313 80.0178C46.1313 79.0823 46.1349 78.9717 46.1516 78.6021C46.1672 78.2606 46.2245 78.0752 46.2721 77.9516C46.3358 77.788 46.4116 77.6713 46.5341 77.5486C46.6566 77.4259 46.7731 77.35 46.9369 77.2866C47.0602 77.2385 47.2458 77.1816 47.5873 77.1661C47.9564 77.1491 48.0673 77.1457 49.0021 77.1457C49.9369 77.1457 50.0479 77.1494 50.4174 77.1661C50.7588 77.1816 50.9441 77.239 51.0677 77.2866C51.2312 77.35 51.3479 77.4261 51.4705 77.5486C51.5932 77.6712 51.6689 77.788 51.7325 77.9516C51.7806 78.0749 51.8375 78.2606 51.853 78.6021C51.87 78.9717 51.8733 79.0823 51.8733 80.0178C51.8733 80.9533 51.87 81.0639 51.853 81.4335C51.8374 81.775 51.7803 81.9606 51.7325 82.084C51.6689 82.2476 51.593 82.3643 51.4705 82.4867C51.3481 82.6091 51.2312 82.685 51.0677 82.7487C50.9444 82.7968 50.7588 82.8537 50.4174 82.8692C50.0482 82.8862 49.9373 82.8896 49.0021 82.8896C48.0669 82.8896 47.9563 82.8862 47.5873 82.8692ZM47.5583 76.5359C47.1854 76.5528 46.9307 76.612 46.7082 76.6986C46.4778 76.788 46.2827 76.908 46.0878 77.1026C45.8929 77.2973 45.7733 77.4927 45.6839 77.7232C45.5973 77.9459 45.5382 78.2006 45.5212 78.5735C45.504 78.947 45.5 79.0664 45.5 80.0178C45.5 80.9691 45.504 81.0885 45.5212 81.462C45.5382 81.835 45.5973 82.0896 45.6839 82.3123C45.7733 82.5427 45.8929 82.7383 46.0878 82.9329C46.2827 83.1275 46.4778 83.2473 46.7082 83.3369C46.9311 83.4235 47.1854 83.4827 47.5583 83.4997C47.9319 83.5166 48.051 83.5209 49.0021 83.5209C49.9532 83.5209 50.0725 83.5169 50.4459 83.4997C50.8188 83.4827 51.0734 83.4235 51.296 83.3369C51.5263 83.2473 51.7215 83.1275 51.9164 82.9329C52.1113 82.7382 52.2307 82.5427 52.3203 82.3123C52.4069 82.0896 52.4663 81.8349 52.483 81.462C52.5 81.0882 52.5039 80.9691 52.5039 80.0178C52.5039 79.0664 52.5 78.947 52.483 78.5735C52.466 78.2005 52.4069 77.9457 52.3203 77.7232C52.2307 77.4929 52.111 77.2976 51.9164 77.1026C51.7218 76.9077 51.5263 76.788 51.2963 76.6986C51.0734 76.612 50.8188 76.5526 50.4462 76.5359C50.0728 76.5189 49.9534 76.5146 49.0024 76.5146C48.0513 76.5146 47.9319 76.5186 47.5583 76.5359Z" fill="#FF4A00"/>
    </svg>
  )
}

export default LowerLink;