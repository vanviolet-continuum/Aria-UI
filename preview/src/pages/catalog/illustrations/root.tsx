import { AssetGallery } from '../../../components/asset.gallery'
import { illustrations } from '../../../catalog/illustrations'
export default function IllustrationsPage() {
  return <AssetGallery assets={illustrations} kind="illustrations" />
}
